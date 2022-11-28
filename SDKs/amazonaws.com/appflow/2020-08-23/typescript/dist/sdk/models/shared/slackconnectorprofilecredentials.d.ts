import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectorOAuthRequest } from "./connectoroauthrequest";
/**
 *  The connector-specific profile credentials required when using Slack.
**/
export declare class SlackConnectorProfileCredentials extends SpeakeasyBase {
    accessToken?: string;
    clientId: string;
    clientSecret: string;
    oAuthRequest?: ConnectorOAuthRequest;
}
