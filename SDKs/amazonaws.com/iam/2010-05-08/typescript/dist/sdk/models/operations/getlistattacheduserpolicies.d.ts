import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetListAttachedUserPoliciesActionEnum {
    ListAttachedUserPolicies = "ListAttachedUserPolicies"
}
export declare enum GetListAttachedUserPoliciesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetListAttachedUserPoliciesQueryParams extends SpeakeasyBase {
    action: GetListAttachedUserPoliciesActionEnum;
    marker?: string;
    maxItems?: number;
    pathPrefix?: string;
    userName: string;
    version: GetListAttachedUserPoliciesVersionEnum;
}
export declare class GetListAttachedUserPoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListAttachedUserPoliciesRequest extends SpeakeasyBase {
    queryParams: GetListAttachedUserPoliciesQueryParams;
    headers: GetListAttachedUserPoliciesHeaders;
}
export declare class GetListAttachedUserPoliciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
