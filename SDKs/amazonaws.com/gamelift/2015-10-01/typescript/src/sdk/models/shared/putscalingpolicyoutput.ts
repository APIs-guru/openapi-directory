import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PutScalingPolicyOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class PutScalingPolicyOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
