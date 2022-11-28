import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetUploadRequest
/** 
 * Represents a request to the get upload operation.
**/
export class GetUploadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;
}
