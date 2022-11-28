import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteScalingPolicyInput
/** 
 * Represents the input for a request operation.
**/
export class DeleteScalingPolicyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
