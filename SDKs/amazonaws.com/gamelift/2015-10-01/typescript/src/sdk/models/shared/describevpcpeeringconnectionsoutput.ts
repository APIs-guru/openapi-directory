import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VpcPeeringConnection } from "./vpcpeeringconnection";


// DescribeVpcPeeringConnectionsOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeVpcPeeringConnectionsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=VpcPeeringConnections", elemType: shared.VpcPeeringConnection })
  vpcPeeringConnections?: VpcPeeringConnection[];
}
