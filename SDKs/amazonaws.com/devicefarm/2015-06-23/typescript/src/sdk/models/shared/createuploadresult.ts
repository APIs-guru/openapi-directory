import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Upload } from "./upload";


// CreateUploadResult
/** 
 * Represents the result of a create upload request.
**/
export class CreateUploadResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=upload" })
  upload?: Upload;
}
