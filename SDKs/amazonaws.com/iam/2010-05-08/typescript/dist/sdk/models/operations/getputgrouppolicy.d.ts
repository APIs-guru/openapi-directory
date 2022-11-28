import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetPutGroupPolicyActionEnum {
    PutGroupPolicy = "PutGroupPolicy"
}
export declare enum GetPutGroupPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetPutGroupPolicyQueryParams extends SpeakeasyBase {
    action: GetPutGroupPolicyActionEnum;
    groupName: string;
    policyDocument: string;
    policyName: string;
    version: GetPutGroupPolicyVersionEnum;
}
export declare class GetPutGroupPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetPutGroupPolicyRequest extends SpeakeasyBase {
    queryParams: GetPutGroupPolicyQueryParams;
    headers: GetPutGroupPolicyHeaders;
}
export declare class GetPutGroupPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
