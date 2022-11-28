import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SsoIdentity } from "./ssoidentity";



// RecipientDetail
/** 
 * The information that identifies the recipient.
**/
export class RecipientDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ssoIdentity" })
  ssoIdentity?: SsoIdentity;
}
