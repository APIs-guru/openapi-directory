import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProtocolValueEnum } from "./protocolvalueenum";



// TransitGatewayConnectOptions
/** 
 * Describes the Connect attachment options.
**/
export class TransitGatewayConnectOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  protocol?: ProtocolValueEnum;
}
