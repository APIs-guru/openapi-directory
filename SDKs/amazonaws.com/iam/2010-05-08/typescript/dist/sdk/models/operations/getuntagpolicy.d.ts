import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetUntagPolicyActionEnum {
    UntagPolicy = "UntagPolicy"
}
export declare enum GetUntagPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetUntagPolicyQueryParams extends SpeakeasyBase {
    action: GetUntagPolicyActionEnum;
    policyArn: string;
    tagKeys: string[];
    version: GetUntagPolicyVersionEnum;
}
export declare class GetUntagPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUntagPolicyRequest extends SpeakeasyBase {
    queryParams: GetUntagPolicyQueryParams;
    headers: GetUntagPolicyHeaders;
}
export declare class GetUntagPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
