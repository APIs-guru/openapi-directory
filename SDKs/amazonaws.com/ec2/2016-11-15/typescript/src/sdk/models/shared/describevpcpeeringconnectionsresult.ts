import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpcPeeringConnection } from "./vpcpeeringconnection";



export class DescribeVpcPeeringConnectionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: VpcPeeringConnection })
  vpcPeeringConnections?: VpcPeeringConnection[];
}
