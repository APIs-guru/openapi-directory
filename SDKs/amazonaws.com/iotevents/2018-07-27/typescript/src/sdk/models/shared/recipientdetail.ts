import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SsoIdentity } from "./ssoidentity";


// RecipientDetail
/** 
 * The information that identifies the recipient.
**/
export class RecipientDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=ssoIdentity" })
  ssoIdentity?: SsoIdentity;
}
