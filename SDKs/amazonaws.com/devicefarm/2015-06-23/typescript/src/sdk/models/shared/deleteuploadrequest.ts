import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteUploadRequest
/** 
 * Represents a request to the delete upload operation.
**/
export class DeleteUploadRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;
}
