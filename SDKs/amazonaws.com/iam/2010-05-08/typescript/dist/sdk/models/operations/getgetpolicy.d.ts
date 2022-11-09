import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetPolicyActionEnum {
    GetPolicy = "GetPolicy"
}
export declare enum GetGetPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetGetPolicyQueryParams extends SpeakeasyBase {
    action: GetGetPolicyActionEnum;
    policyArn: string;
    version: GetGetPolicyVersionEnum;
}
export declare class GetGetPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetPolicyRequest extends SpeakeasyBase {
    queryParams: GetGetPolicyQueryParams;
    headers: GetGetPolicyHeaders;
}
export declare class GetGetPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
