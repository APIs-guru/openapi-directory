import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetPutRolePolicyActionEnum {
    PutRolePolicy = "PutRolePolicy"
}
export declare enum GetPutRolePolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetPutRolePolicyQueryParams extends SpeakeasyBase {
    action: GetPutRolePolicyActionEnum;
    policyDocument: string;
    policyName: string;
    roleName: string;
    version: GetPutRolePolicyVersionEnum;
}
export declare class GetPutRolePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetPutRolePolicyRequest extends SpeakeasyBase {
    queryParams: GetPutRolePolicyQueryParams;
    headers: GetPutRolePolicyHeaders;
}
export declare class GetPutRolePolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
