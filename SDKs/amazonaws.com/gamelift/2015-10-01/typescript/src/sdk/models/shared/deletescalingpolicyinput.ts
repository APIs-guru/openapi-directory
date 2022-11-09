import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteScalingPolicyInput
/** 
 * Represents the input for a request operation.
**/
export class DeleteScalingPolicyInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetId" })
  fleetId: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
