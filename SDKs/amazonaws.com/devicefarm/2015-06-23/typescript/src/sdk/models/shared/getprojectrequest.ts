import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetProjectRequest
/** 
 * Represents a request to the get project operation.
**/
export class GetProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;
}
