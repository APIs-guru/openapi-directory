import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack.
**/
export declare class ConnectorOAuthRequest extends SpeakeasyBase {
    authCode?: string;
    redirectUri?: string;
}
