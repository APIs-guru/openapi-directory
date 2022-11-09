import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SourceFileSpecifier
/** 
 * Information about a source file that is part of changes made in a commit.
**/
export class SourceFileSpecifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=filePath" })
  filePath: string;

  @Metadata({ data: "json, name=isMove" })
  isMove?: boolean;
}
