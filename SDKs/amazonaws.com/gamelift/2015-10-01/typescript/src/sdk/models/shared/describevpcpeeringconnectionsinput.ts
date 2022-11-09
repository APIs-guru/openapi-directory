import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeVpcPeeringConnectionsInput
/** 
 * Represents the input for a request operation.
**/
export class DescribeVpcPeeringConnectionsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetId" })
  fleetId?: string;
}
