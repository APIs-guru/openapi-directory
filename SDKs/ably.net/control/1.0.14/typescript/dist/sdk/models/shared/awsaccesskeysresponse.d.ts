import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum AwsAccessKeysResponseAuthenticationModeEnum {
    Credentials = "credentials"
}
export declare class AwsAccessKeysResponse extends SpeakeasyBase {
    accessKeyId?: string;
    authenticationMode?: AwsAccessKeysResponseAuthenticationModeEnum;
}
