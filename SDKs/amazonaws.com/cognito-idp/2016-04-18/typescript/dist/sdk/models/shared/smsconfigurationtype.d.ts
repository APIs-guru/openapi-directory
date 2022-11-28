import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The SMS configuration type that includes the settings the Cognito User Pool needs to call for the Amazon SNS service to send an SMS message from your account. The Cognito User Pool makes the request to the Amazon SNS Service by using an IAM role that you provide for your account.
**/
export declare class SmsConfigurationType extends SpeakeasyBase {
    externalId?: string;
    snsCallerArn: string;
}
