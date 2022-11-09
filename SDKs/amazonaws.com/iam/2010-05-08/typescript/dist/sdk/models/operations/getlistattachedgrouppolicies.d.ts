import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetListAttachedGroupPoliciesActionEnum {
    ListAttachedGroupPolicies = "ListAttachedGroupPolicies"
}
export declare enum GetListAttachedGroupPoliciesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetListAttachedGroupPoliciesQueryParams extends SpeakeasyBase {
    action: GetListAttachedGroupPoliciesActionEnum;
    groupName: string;
    marker?: string;
    maxItems?: number;
    pathPrefix?: string;
    version: GetListAttachedGroupPoliciesVersionEnum;
}
export declare class GetListAttachedGroupPoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListAttachedGroupPoliciesRequest extends SpeakeasyBase {
    queryParams: GetListAttachedGroupPoliciesQueryParams;
    headers: GetListAttachedGroupPoliciesHeaders;
}
export declare class GetListAttachedGroupPoliciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
