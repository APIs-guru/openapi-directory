import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteVpcPeeringConnectionInput
/** 
 * Represents the input for a request operation.
**/
export class DeleteVpcPeeringConnectionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetId" })
  fleetId: string;

  @Metadata({ data: "json, name=VpcPeeringConnectionId" })
  vpcPeeringConnectionId: string;
}
