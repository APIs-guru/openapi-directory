import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetRunRequest
/** 
 * Represents a request to the get run operation.
**/
export class GetRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;
}
