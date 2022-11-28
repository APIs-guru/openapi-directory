import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteUserPolicyActionEnum {
    DeleteUserPolicy = "DeleteUserPolicy"
}
export declare enum GetDeleteUserPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetDeleteUserPolicyQueryParams extends SpeakeasyBase {
    action: GetDeleteUserPolicyActionEnum;
    policyName: string;
    userName: string;
    version: GetDeleteUserPolicyVersionEnum;
}
export declare class GetDeleteUserPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteUserPolicyRequest extends SpeakeasyBase {
    queryParams: GetDeleteUserPolicyQueryParams;
    headers: GetDeleteUserPolicyHeaders;
}
export declare class GetDeleteUserPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
