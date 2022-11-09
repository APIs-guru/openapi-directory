import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetProjectRequest
/** 
 * Represents a request to the get project operation.
**/
export class GetProjectRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;
}
