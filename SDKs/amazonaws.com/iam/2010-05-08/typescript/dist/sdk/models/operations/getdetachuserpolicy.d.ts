import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDetachUserPolicyActionEnum {
    DetachUserPolicy = "DetachUserPolicy"
}
export declare enum GetDetachUserPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetDetachUserPolicyQueryParams extends SpeakeasyBase {
    action: GetDetachUserPolicyActionEnum;
    policyArn: string;
    userName: string;
    version: GetDetachUserPolicyVersionEnum;
}
export declare class GetDetachUserPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDetachUserPolicyRequest extends SpeakeasyBase {
    queryParams: GetDetachUserPolicyQueryParams;
    headers: GetDetachUserPolicyHeaders;
}
export declare class GetDetachUserPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
