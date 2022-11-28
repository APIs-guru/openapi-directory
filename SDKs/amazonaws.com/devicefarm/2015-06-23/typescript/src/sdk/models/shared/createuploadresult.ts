import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Upload } from "./upload";



// CreateUploadResult
/** 
 * Represents the result of a create upload request.
**/
export class CreateUploadResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=upload" })
  upload?: Upload;
}
