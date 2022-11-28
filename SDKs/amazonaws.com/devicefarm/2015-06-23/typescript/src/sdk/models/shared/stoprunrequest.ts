import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StopRunRequest
/** 
 * Represents the request to stop a specific run.
**/
export class StopRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;
}
