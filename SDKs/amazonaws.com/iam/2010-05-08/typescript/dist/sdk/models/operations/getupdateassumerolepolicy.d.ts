import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetUpdateAssumeRolePolicyActionEnum {
    UpdateAssumeRolePolicy = "UpdateAssumeRolePolicy"
}
export declare enum GetUpdateAssumeRolePolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetUpdateAssumeRolePolicyQueryParams extends SpeakeasyBase {
    action: GetUpdateAssumeRolePolicyActionEnum;
    policyDocument: string;
    roleName: string;
    version: GetUpdateAssumeRolePolicyVersionEnum;
}
export declare class GetUpdateAssumeRolePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUpdateAssumeRolePolicyRequest extends SpeakeasyBase {
    queryParams: GetUpdateAssumeRolePolicyQueryParams;
    headers: GetUpdateAssumeRolePolicyHeaders;
}
export declare class GetUpdateAssumeRolePolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
