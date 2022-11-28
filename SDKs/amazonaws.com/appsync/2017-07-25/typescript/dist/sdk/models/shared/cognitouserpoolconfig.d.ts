import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an Amazon Cognito user pool configuration.
**/
export declare class CognitoUserPoolConfig extends SpeakeasyBase {
    appIdClientRegex?: string;
    awsRegion: string;
    userPoolId: string;
}
