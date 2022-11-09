import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualGatewayClientPolicy } from "./virtualgatewayclientpolicy";


// VirtualGatewayBackendDefaults
/** 
 * An object that represents the default properties for a backend.
**/
export class VirtualGatewayBackendDefaults extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientPolicy" })
  clientPolicy?: VirtualGatewayClientPolicy;
}
