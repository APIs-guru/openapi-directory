import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayConnect } from "./transitgatewayconnect";



export class DescribeTransitGatewayConnectsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: TransitGatewayConnect })
  transitGatewayConnects?: TransitGatewayConnect[];
}
