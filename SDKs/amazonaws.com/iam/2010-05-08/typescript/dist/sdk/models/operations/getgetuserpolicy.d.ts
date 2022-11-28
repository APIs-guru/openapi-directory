import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGetUserPolicyActionEnum {
    GetUserPolicy = "GetUserPolicy"
}
export declare enum GetGetUserPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetGetUserPolicyQueryParams extends SpeakeasyBase {
    action: GetGetUserPolicyActionEnum;
    policyName: string;
    userName: string;
    version: GetGetUserPolicyVersionEnum;
}
export declare class GetGetUserPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetUserPolicyRequest extends SpeakeasyBase {
    queryParams: GetGetUserPolicyQueryParams;
    headers: GetGetUserPolicyHeaders;
}
export declare class GetGetUserPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
