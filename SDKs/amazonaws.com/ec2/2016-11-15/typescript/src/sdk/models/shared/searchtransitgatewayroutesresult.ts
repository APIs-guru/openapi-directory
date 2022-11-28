import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayRoute } from "./transitgatewayroute";



export class SearchTransitGatewayRoutesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  additionalRoutesAvailable?: boolean;

  @SpeakeasyMetadata({ elemType: TransitGatewayRoute })
  routes?: TransitGatewayRoute[];
}
