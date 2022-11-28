import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PeeringTgwInfo
/** 
 * Information about the transit gateway in the peering attachment.
**/
export class PeeringTgwInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  ownerId?: string;

  @SpeakeasyMetadata()
  region?: string;

  @SpeakeasyMetadata()
  transitGatewayId?: string;
}
