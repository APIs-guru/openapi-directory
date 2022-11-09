import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OpenIdConnectConfig
/** 
 * Describes an OpenID Connect configuration.
**/
export class OpenIdConnectConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=authTTL" })
  authTtl?: number;

  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=iatTTL" })
  iatTtl?: number;

  @Metadata({ data: "json, name=issuer" })
  issuer: string;
}
