import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetAttachGroupPolicyActionEnum {
    AttachGroupPolicy = "AttachGroupPolicy"
}
export declare enum GetAttachGroupPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetAttachGroupPolicyQueryParams extends SpeakeasyBase {
    action: GetAttachGroupPolicyActionEnum;
    groupName: string;
    policyArn: string;
    version: GetAttachGroupPolicyVersionEnum;
}
export declare class GetAttachGroupPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAttachGroupPolicyRequest extends SpeakeasyBase {
    queryParams: GetAttachGroupPolicyQueryParams;
    headers: GetAttachGroupPolicyHeaders;
}
export declare class GetAttachGroupPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
