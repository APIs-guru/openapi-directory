import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Upload } from "./upload";


// GetUploadResult
/** 
 * Represents the result of a get upload request.
**/
export class GetUploadResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=upload" })
  upload?: Upload;
}
