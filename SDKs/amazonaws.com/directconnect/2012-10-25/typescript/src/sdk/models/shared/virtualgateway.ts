import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VirtualGateway
/** 
 * Information about a virtual private gateway for a private virtual interface.
**/
export class VirtualGateway extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=virtualGatewayId" })
  virtualGatewayId?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualGatewayState" })
  virtualGatewayState?: string;
}
