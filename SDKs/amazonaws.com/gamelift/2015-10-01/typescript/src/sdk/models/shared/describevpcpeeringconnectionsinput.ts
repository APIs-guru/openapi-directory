import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeVpcPeeringConnectionsInput
/** 
 * Represents the input for a request operation.
**/
export class DescribeVpcPeeringConnectionsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId?: string;
}
