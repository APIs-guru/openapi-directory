import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayRouteTable } from "./transitgatewayroutetable";



export class DescribeTransitGatewayRouteTablesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: TransitGatewayRouteTable })
  transitGatewayRouteTables?: TransitGatewayRouteTable[];
}
