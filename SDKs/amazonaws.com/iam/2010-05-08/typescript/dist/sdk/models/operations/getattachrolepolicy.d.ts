import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetAttachRolePolicyActionEnum {
    AttachRolePolicy = "AttachRolePolicy"
}
export declare enum GetAttachRolePolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetAttachRolePolicyQueryParams extends SpeakeasyBase {
    action: GetAttachRolePolicyActionEnum;
    policyArn: string;
    roleName: string;
    version: GetAttachRolePolicyVersionEnum;
}
export declare class GetAttachRolePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAttachRolePolicyRequest extends SpeakeasyBase {
    queryParams: GetAttachRolePolicyQueryParams;
    headers: GetAttachRolePolicyHeaders;
}
export declare class GetAttachRolePolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
