import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetSuiteRequest
/** 
 * Represents a request to the get suite operation.
**/
export class GetSuiteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;
}
