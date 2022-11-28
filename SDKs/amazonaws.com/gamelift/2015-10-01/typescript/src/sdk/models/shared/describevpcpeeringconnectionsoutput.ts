import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpcPeeringConnection } from "./vpcpeeringconnection";



// DescribeVpcPeeringConnectionsOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeVpcPeeringConnectionsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=VpcPeeringConnections", elemType: VpcPeeringConnection })
  vpcPeeringConnections?: VpcPeeringConnection[];
}
