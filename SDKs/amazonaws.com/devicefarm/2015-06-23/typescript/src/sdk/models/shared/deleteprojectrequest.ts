import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteProjectRequest
/** 
 * Represents a request to the delete project operation.
**/
export class DeleteProjectRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;
}
