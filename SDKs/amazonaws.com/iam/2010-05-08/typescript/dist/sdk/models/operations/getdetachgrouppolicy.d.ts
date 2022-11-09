import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDetachGroupPolicyActionEnum {
    DetachGroupPolicy = "DetachGroupPolicy"
}
export declare enum GetDetachGroupPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetDetachGroupPolicyQueryParams extends SpeakeasyBase {
    action: GetDetachGroupPolicyActionEnum;
    groupName: string;
    policyArn: string;
    version: GetDetachGroupPolicyVersionEnum;
}
export declare class GetDetachGroupPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDetachGroupPolicyRequest extends SpeakeasyBase {
    queryParams: GetDetachGroupPolicyQueryParams;
    headers: GetDetachGroupPolicyHeaders;
}
export declare class GetDetachGroupPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
