import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AuthorizerConfig
/** 
 * An object that specifies the authorization service for a domain.
**/
export class AuthorizerConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowAuthorizerOverride" })
  allowAuthorizerOverride?: boolean;

  @Metadata({ data: "json, name=defaultAuthorizerName" })
  defaultAuthorizerName?: string;
}
