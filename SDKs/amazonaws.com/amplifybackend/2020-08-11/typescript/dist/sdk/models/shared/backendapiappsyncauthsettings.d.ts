import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The authentication settings for accessing provisioned data models in your Amplify project.
**/
export declare class BackendApiAppSyncAuthSettings extends SpeakeasyBase {
    cognitoUserPoolId?: string;
    description?: string;
    expirationTime?: number;
    openIdAuthTtl?: string;
    openIdClientId?: string;
    openIdIatTtl?: string;
    openIdIssueUrl?: string;
    openIdProviderName?: string;
}
