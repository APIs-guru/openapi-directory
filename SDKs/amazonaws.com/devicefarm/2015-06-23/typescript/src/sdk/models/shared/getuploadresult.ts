import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Upload } from "./upload";



// GetUploadResult
/** 
 * Represents the result of a get upload request.
**/
export class GetUploadResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=upload" })
  upload?: Upload;
}
