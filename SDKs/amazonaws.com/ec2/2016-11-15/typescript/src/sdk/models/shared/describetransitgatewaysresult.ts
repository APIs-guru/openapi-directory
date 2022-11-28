import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGateway } from "./transitgateway";



export class DescribeTransitGatewaysResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: TransitGateway })
  transitGateways?: TransitGateway[];
}
