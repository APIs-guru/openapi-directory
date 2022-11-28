import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Oidc
/** 
 * An object representing the <a href="https://openid.net/connect/">OpenID Connect</a> (OIDC) identity provider information for the cluster.
**/
export class Oidc extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=issuer" })
  issuer?: string;
}
