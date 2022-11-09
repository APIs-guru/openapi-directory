import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Oidc
/** 
 * An object representing the <a href="https://openid.net/connect/">OpenID Connect</a> (OIDC) identity provider information for the cluster.
**/
export class Oidc extends SpeakeasyBase {
  @Metadata({ data: "json, name=issuer" })
  issuer?: string;
}
