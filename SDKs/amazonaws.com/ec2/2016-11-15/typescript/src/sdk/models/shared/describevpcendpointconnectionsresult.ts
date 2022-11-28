import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpcEndpointConnection } from "./vpcendpointconnection";



export class DescribeVpcEndpointConnectionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: VpcEndpointConnection })
  vpcEndpointConnections?: VpcEndpointConnection[];
}
