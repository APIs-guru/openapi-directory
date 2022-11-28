import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A provider representing an Amazon Cognito user pool and its client ID.
**/
export declare class CognitoIdentityProvider extends SpeakeasyBase {
    clientId?: string;
    providerName?: string;
    serverSideTokenCheck?: boolean;
}
