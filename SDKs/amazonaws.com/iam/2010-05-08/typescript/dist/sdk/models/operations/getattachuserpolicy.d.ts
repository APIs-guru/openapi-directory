import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetAttachUserPolicyActionEnum {
    AttachUserPolicy = "AttachUserPolicy"
}
export declare enum GetAttachUserPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetAttachUserPolicyQueryParams extends SpeakeasyBase {
    action: GetAttachUserPolicyActionEnum;
    policyArn: string;
    userName: string;
    version: GetAttachUserPolicyVersionEnum;
}
export declare class GetAttachUserPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAttachUserPolicyRequest extends SpeakeasyBase {
    queryParams: GetAttachUserPolicyQueryParams;
    headers: GetAttachUserPolicyHeaders;
}
export declare class GetAttachUserPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
