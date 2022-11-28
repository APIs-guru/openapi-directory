import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteFileEntry
/** 
 * A file that is deleted as part of a commit.
**/
export class DeleteFileEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filePath" })
  filePath: string;
}
