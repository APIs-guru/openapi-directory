import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum AwsAccessKeysAuthenticationModeEnum {
    Credentials = "credentials"
}
export declare class AwsAccessKeys extends SpeakeasyBase {
    accessKeyId: string;
    authenticationMode?: AwsAccessKeysAuthenticationModeEnum;
    secretAccessKey: string;
}
