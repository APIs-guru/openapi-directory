import { SpeakeasyBase } from "../../../internal/utils";
import { VpcPeeringConnection } from "./vpcpeeringconnection";
export declare class DescribeVpcPeeringConnectionsResult extends SpeakeasyBase {
    nextToken?: string;
    vpcPeeringConnections?: VpcPeeringConnection[];
}
