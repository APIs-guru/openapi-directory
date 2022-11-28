import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AnalysisRouteTableRoute
/** 
 * Describes a route table route.
**/
export class AnalysisRouteTableRoute extends SpeakeasyBase {
  @SpeakeasyMetadata()
  destinationCidr?: string;

  @SpeakeasyMetadata()
  destinationPrefixListId?: string;

  @SpeakeasyMetadata()
  egressOnlyInternetGatewayId?: string;

  @SpeakeasyMetadata()
  gatewayId?: string;

  @SpeakeasyMetadata()
  instanceId?: string;

  @SpeakeasyMetadata()
  natGatewayId?: string;

  @SpeakeasyMetadata()
  networkInterfaceId?: string;

  @SpeakeasyMetadata()
  origin?: string;

  @SpeakeasyMetadata()
  transitGatewayId?: string;

  @SpeakeasyMetadata()
  vpcPeeringConnectionId?: string;
}
