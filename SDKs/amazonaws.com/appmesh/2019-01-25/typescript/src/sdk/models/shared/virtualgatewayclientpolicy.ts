import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualGatewayClientPolicyTls } from "./virtualgatewayclientpolicytls";


// VirtualGatewayClientPolicy
/** 
 * An object that represents a client policy.
**/
export class VirtualGatewayClientPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=tls" })
  tls?: VirtualGatewayClientPolicyTls;
}
