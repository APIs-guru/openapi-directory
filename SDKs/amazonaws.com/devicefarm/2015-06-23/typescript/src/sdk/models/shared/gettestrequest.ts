import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetTestRequest
/** 
 * Represents a request to the get test operation.
**/
export class GetTestRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;
}
