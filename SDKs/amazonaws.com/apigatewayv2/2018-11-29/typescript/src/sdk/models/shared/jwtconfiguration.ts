import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// JwtConfiguration
/** 
 * Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.
**/
export class JwtConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=Audience" })
  audience?: string[];

  @Metadata({ data: "json, name=Issuer" })
  issuer?: string;
}
