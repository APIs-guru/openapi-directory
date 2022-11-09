import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetRolePolicyActionEnum {
    GetRolePolicy = "GetRolePolicy"
}
export declare enum GetGetRolePolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetGetRolePolicyQueryParams extends SpeakeasyBase {
    action: GetGetRolePolicyActionEnum;
    policyName: string;
    roleName: string;
    version: GetGetRolePolicyVersionEnum;
}
export declare class GetGetRolePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetRolePolicyRequest extends SpeakeasyBase {
    queryParams: GetGetRolePolicyQueryParams;
    headers: GetGetRolePolicyHeaders;
}
export declare class GetGetRolePolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
