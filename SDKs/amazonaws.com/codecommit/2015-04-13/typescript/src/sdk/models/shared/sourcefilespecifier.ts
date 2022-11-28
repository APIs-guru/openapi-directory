import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SourceFileSpecifier
/** 
 * Information about a source file that is part of changes made in a commit.
**/
export class SourceFileSpecifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filePath" })
  filePath: string;

  @SpeakeasyMetadata({ data: "json, name=isMove" })
  isMove?: boolean;
}
