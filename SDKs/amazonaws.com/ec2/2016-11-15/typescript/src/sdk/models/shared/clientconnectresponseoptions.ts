import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientVpnEndpointAttributeStatus } from "./clientvpnendpointattributestatus";



// ClientConnectResponseOptions
/** 
 * The options for managing connection authorization for new client connections.
**/
export class ClientConnectResponseOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  enabled?: boolean;

  @SpeakeasyMetadata()
  lambdaFunctionArn?: string;

  @SpeakeasyMetadata()
  status?: ClientVpnEndpointAttributeStatus;
}
