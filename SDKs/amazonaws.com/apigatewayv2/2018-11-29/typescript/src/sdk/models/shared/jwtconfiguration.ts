import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// JwtConfiguration
/** 
 * Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.
**/
export class JwtConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Audience" })
  audience?: string[];

  @SpeakeasyMetadata({ data: "json, name=Issuer" })
  issuer?: string;
}
