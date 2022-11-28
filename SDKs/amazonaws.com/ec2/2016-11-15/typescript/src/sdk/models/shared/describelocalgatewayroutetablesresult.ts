import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocalGatewayRouteTable } from "./localgatewayroutetable";



export class DescribeLocalGatewayRouteTablesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: LocalGatewayRouteTable })
  localGatewayRouteTables?: LocalGatewayRouteTable[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
