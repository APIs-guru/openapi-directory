import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteFileEntry
/** 
 * A file that is deleted as part of a commit.
**/
export class DeleteFileEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=filePath" })
  filePath: string;
}
