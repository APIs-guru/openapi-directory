import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OpenIdConnectConfig
/** 
 * Describes an OpenID Connect configuration.
**/
export class OpenIdConnectConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authTTL" })
  authTtl?: number;

  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=iatTTL" })
  iatTtl?: number;

  @SpeakeasyMetadata({ data: "json, name=issuer" })
  issuer: string;
}
