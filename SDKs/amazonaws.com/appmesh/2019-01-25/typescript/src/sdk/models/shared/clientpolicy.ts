import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientPolicyTls } from "./clientpolicytls";



// ClientPolicy
/** 
 * An object that represents a client policy.
**/
export class ClientPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tls" })
  tls?: ClientPolicyTls;
}
