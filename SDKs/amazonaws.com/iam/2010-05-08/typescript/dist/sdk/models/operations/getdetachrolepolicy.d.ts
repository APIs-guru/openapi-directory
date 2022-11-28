import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDetachRolePolicyActionEnum {
    DetachRolePolicy = "DetachRolePolicy"
}
export declare enum GetDetachRolePolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetDetachRolePolicyQueryParams extends SpeakeasyBase {
    action: GetDetachRolePolicyActionEnum;
    policyArn: string;
    roleName: string;
    version: GetDetachRolePolicyVersionEnum;
}
export declare class GetDetachRolePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDetachRolePolicyRequest extends SpeakeasyBase {
    queryParams: GetDetachRolePolicyQueryParams;
    headers: GetDetachRolePolicyHeaders;
}
export declare class GetDetachRolePolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
