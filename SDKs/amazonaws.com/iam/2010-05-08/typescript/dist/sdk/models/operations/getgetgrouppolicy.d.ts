import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGetGroupPolicyActionEnum {
    GetGroupPolicy = "GetGroupPolicy"
}
export declare enum GetGetGroupPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetGetGroupPolicyQueryParams extends SpeakeasyBase {
    action: GetGetGroupPolicyActionEnum;
    groupName: string;
    policyName: string;
    version: GetGetGroupPolicyVersionEnum;
}
export declare class GetGetGroupPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetGroupPolicyRequest extends SpeakeasyBase {
    queryParams: GetGetGroupPolicyQueryParams;
    headers: GetGetGroupPolicyHeaders;
}
export declare class GetGetGroupPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
