import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayConnectPeer } from "./transitgatewayconnectpeer";



export class DescribeTransitGatewayConnectPeersResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: TransitGatewayConnectPeer })
  transitGatewayConnectPeers?: TransitGatewayConnectPeer[];
}
