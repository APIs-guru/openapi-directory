import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayMulticastDomain } from "./transitgatewaymulticastdomain";



export class DescribeTransitGatewayMulticastDomainsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: TransitGatewayMulticastDomain })
  transitGatewayMulticastDomains?: TransitGatewayMulticastDomain[];
}
