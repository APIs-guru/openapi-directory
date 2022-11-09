import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BasicAuthCredentials } from "./basicauthcredentials";
import { OAuthCredentials } from "./oauthcredentials";


// SapoDataConnectorProfileCredentials
/** 
 *  The connector-specific profile credentials required when using SAPOData. 
**/
export class SapoDataConnectorProfileCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=basicAuthCredentials" })
  basicAuthCredentials?: BasicAuthCredentials;

  @Metadata({ data: "json, name=oAuthCredentials" })
  oAuthCredentials?: OAuthCredentials;
}
