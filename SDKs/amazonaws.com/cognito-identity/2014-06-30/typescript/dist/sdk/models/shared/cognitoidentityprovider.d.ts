import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A provider representing an Amazon Cognito user pool and its client ID.
**/
export declare class CognitoIdentityProvider extends SpeakeasyBase {
    clientId?: string;
    providerName?: string;
    serverSideTokenCheck?: boolean;
}
