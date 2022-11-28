import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualGatewayClientPolicyTls } from "./virtualgatewayclientpolicytls";



// VirtualGatewayClientPolicy
/** 
 * An object that represents a client policy.
**/
export class VirtualGatewayClientPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tls" })
  tls?: VirtualGatewayClientPolicyTls;
}
