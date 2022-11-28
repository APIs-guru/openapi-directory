import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetUpdateAccountPasswordPolicyActionEnum {
    UpdateAccountPasswordPolicy = "UpdateAccountPasswordPolicy"
}
export declare enum GetUpdateAccountPasswordPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetUpdateAccountPasswordPolicyQueryParams extends SpeakeasyBase {
    action: GetUpdateAccountPasswordPolicyActionEnum;
    allowUsersToChangePassword?: boolean;
    hardExpiry?: boolean;
    maxPasswordAge?: number;
    minimumPasswordLength?: number;
    passwordReusePrevention?: number;
    requireLowercaseCharacters?: boolean;
    requireNumbers?: boolean;
    requireSymbols?: boolean;
    requireUppercaseCharacters?: boolean;
    version: GetUpdateAccountPasswordPolicyVersionEnum;
}
export declare class GetUpdateAccountPasswordPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUpdateAccountPasswordPolicyRequest extends SpeakeasyBase {
    queryParams: GetUpdateAccountPasswordPolicyQueryParams;
    headers: GetUpdateAccountPasswordPolicyHeaders;
}
export declare class GetUpdateAccountPasswordPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
