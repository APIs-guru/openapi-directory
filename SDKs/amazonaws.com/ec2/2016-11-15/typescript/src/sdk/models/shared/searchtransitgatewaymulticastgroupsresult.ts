import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayMulticastGroup } from "./transitgatewaymulticastgroup";



export class SearchTransitGatewayMulticastGroupsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: TransitGatewayMulticastGroup })
  multicastGroups?: TransitGatewayMulticastGroup[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
