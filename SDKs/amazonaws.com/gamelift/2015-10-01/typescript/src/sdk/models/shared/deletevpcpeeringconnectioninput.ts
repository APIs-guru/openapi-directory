import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteVpcPeeringConnectionInput
/** 
 * Represents the input for a request operation.
**/
export class DeleteVpcPeeringConnectionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId: string;

  @SpeakeasyMetadata({ data: "json, name=VpcPeeringConnectionId" })
  vpcPeeringConnectionId: string;
}
