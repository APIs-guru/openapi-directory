import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayMulticastDeregisteredGroupSources } from "./transitgatewaymulticastderegisteredgroupsources";



export class DeregisterTransitGatewayMulticastGroupSourcesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  deregisteredMulticastGroupSources?: TransitGatewayMulticastDeregisteredGroupSources;
}
