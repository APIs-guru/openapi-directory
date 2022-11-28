import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteUploadRequest
/** 
 * Represents a request to the delete upload operation.
**/
export class DeleteUploadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;
}
