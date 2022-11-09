import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClientPolicyTls } from "./clientpolicytls";


// ClientPolicy
/** 
 * An object that represents a client policy.
**/
export class ClientPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=tls" })
  tls?: ClientPolicyTls;
}
