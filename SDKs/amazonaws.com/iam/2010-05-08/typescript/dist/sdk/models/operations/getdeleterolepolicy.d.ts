import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteRolePolicyActionEnum {
    DeleteRolePolicy = "DeleteRolePolicy"
}
export declare enum GetDeleteRolePolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetDeleteRolePolicyQueryParams extends SpeakeasyBase {
    action: GetDeleteRolePolicyActionEnum;
    policyName: string;
    roleName: string;
    version: GetDeleteRolePolicyVersionEnum;
}
export declare class GetDeleteRolePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteRolePolicyRequest extends SpeakeasyBase {
    queryParams: GetDeleteRolePolicyQueryParams;
    headers: GetDeleteRolePolicyHeaders;
}
export declare class GetDeleteRolePolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
