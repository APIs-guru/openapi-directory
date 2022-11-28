import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetTestRequest
/** 
 * Represents a request to the get test operation.
**/
export class GetTestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;
}
