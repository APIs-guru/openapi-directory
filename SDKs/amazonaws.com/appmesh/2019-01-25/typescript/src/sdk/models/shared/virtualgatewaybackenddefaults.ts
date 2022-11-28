import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualGatewayClientPolicy } from "./virtualgatewayclientpolicy";



// VirtualGatewayBackendDefaults
/** 
 * An object that represents the default properties for a backend.
**/
export class VirtualGatewayBackendDefaults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientPolicy" })
  clientPolicy?: VirtualGatewayClientPolicy;
}
