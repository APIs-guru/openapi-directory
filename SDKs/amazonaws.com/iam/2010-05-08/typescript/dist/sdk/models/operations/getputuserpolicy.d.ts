import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetPutUserPolicyActionEnum {
    PutUserPolicy = "PutUserPolicy"
}
export declare enum GetPutUserPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetPutUserPolicyQueryParams extends SpeakeasyBase {
    action: GetPutUserPolicyActionEnum;
    policyDocument: string;
    policyName: string;
    userName: string;
    version: GetPutUserPolicyVersionEnum;
}
export declare class GetPutUserPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetPutUserPolicyRequest extends SpeakeasyBase {
    queryParams: GetPutUserPolicyQueryParams;
    headers: GetPutUserPolicyHeaders;
}
export declare class GetPutUserPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
