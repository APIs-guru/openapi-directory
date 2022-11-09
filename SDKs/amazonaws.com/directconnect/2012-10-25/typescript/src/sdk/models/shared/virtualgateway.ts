import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VirtualGateway
/** 
 * Information about a virtual private gateway for a private virtual interface.
**/
export class VirtualGateway extends SpeakeasyBase {
  @Metadata({ data: "json, name=virtualGatewayId" })
  virtualGatewayId?: string;

  @Metadata({ data: "json, name=virtualGatewayState" })
  virtualGatewayState?: string;
}
