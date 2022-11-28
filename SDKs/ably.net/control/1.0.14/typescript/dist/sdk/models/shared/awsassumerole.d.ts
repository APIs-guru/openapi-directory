import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AwsAssumeRoleAuthenticationModeEnum {
    AssumeRole = "assumeRole"
}
export declare class AwsAssumeRole extends SpeakeasyBase {
    assumeRoleArn: string;
    authenticationMode?: AwsAssumeRoleAuthenticationModeEnum;
}
