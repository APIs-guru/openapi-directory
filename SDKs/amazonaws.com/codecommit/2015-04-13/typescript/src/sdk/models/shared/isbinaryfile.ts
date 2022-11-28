import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IsBinaryFile
/** 
 * Information about whether a file is binary or textual in a merge or pull request operation.
**/
export class IsBinaryFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=base" })
  base?: boolean;

  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: boolean;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: boolean;
}
