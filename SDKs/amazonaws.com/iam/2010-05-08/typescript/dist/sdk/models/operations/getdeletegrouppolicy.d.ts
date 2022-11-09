import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteGroupPolicyActionEnum {
    DeleteGroupPolicy = "DeleteGroupPolicy"
}
export declare enum GetDeleteGroupPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetDeleteGroupPolicyQueryParams extends SpeakeasyBase {
    action: GetDeleteGroupPolicyActionEnum;
    groupName: string;
    policyName: string;
    version: GetDeleteGroupPolicyVersionEnum;
}
export declare class GetDeleteGroupPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteGroupPolicyRequest extends SpeakeasyBase {
    queryParams: GetDeleteGroupPolicyQueryParams;
    headers: GetDeleteGroupPolicyHeaders;
}
export declare class GetDeleteGroupPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
