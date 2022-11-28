import { SpeakeasyBase } from "../../../internal/utils";
import { VpcEndpointConnection } from "./vpcendpointconnection";
export declare class DescribeVpcEndpointConnectionsResult extends SpeakeasyBase {
    nextToken?: string;
    vpcEndpointConnections?: VpcEndpointConnection[];
}
