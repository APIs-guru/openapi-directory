import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectorOAuthRequest } from "./connectoroauthrequest";


// HoneycodeConnectorProfileCredentials
/** 
 *  The connector-specific credentials required when using Amazon Honeycode. 
**/
export class HoneycodeConnectorProfileCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessToken" })
  accessToken?: string;

  @Metadata({ data: "json, name=oAuthRequest" })
  oAuthRequest?: ConnectorOAuthRequest;

  @Metadata({ data: "json, name=refreshToken" })
  refreshToken?: string;
}
