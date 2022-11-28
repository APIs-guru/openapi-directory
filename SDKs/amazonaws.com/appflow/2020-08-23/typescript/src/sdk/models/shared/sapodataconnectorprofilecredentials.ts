import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BasicAuthCredentials } from "./basicauthcredentials";
import { OAuthCredentials } from "./oauthcredentials";



// SapoDataConnectorProfileCredentials
/** 
 *  The connector-specific profile credentials required when using SAPOData. 
**/
export class SapoDataConnectorProfileCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basicAuthCredentials" })
  basicAuthCredentials?: BasicAuthCredentials;

  @SpeakeasyMetadata({ data: "json, name=oAuthCredentials" })
  oAuthCredentials?: OAuthCredentials;
}
