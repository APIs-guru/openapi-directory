import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayMulticastRegisteredGroupSources } from "./transitgatewaymulticastregisteredgroupsources";



export class RegisterTransitGatewayMulticastGroupSourcesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  registeredMulticastGroupSources?: TransitGatewayMulticastRegisteredGroupSources;
}
