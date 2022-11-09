import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DefaultActionEnum } from "./defaultactionenum";
/**
 * Describes an Amazon Cognito user pool configuration.
**/
export declare class UserPoolConfig extends SpeakeasyBase {
    appIdClientRegex?: string;
    awsRegion: string;
    defaultAction: DefaultActionEnum;
    userPoolId: string;
}
