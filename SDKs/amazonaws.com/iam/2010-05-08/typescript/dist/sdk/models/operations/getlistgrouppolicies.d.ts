import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetListGroupPoliciesActionEnum {
    ListGroupPolicies = "ListGroupPolicies"
}
export declare enum GetListGroupPoliciesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetListGroupPoliciesQueryParams extends SpeakeasyBase {
    action: GetListGroupPoliciesActionEnum;
    groupName: string;
    marker?: string;
    maxItems?: number;
    version: GetListGroupPoliciesVersionEnum;
}
export declare class GetListGroupPoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListGroupPoliciesRequest extends SpeakeasyBase {
    queryParams: GetListGroupPoliciesQueryParams;
    headers: GetListGroupPoliciesHeaders;
}
export declare class GetListGroupPoliciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
