import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AuthorizerConfig
/** 
 * An object that specifies the authorization service for a domain.
**/
export class AuthorizerConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowAuthorizerOverride" })
  allowAuthorizerOverride?: boolean;

  @SpeakeasyMetadata({ data: "json, name=defaultAuthorizerName" })
  defaultAuthorizerName?: string;
}
