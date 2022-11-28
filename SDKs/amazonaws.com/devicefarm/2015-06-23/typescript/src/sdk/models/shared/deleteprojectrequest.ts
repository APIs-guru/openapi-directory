import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteProjectRequest
/** 
 * Represents a request to the delete project operation.
**/
export class DeleteProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;
}
