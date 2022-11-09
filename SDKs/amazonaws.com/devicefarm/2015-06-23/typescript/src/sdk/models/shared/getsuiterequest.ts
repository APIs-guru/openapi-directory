import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetSuiteRequest
/** 
 * Represents a request to the get suite operation.
**/
export class GetSuiteRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;
}
