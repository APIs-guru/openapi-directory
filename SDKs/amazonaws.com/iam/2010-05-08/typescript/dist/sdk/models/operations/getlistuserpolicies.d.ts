import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetListUserPoliciesActionEnum {
    ListUserPolicies = "ListUserPolicies"
}
export declare enum GetListUserPoliciesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetListUserPoliciesQueryParams extends SpeakeasyBase {
    action: GetListUserPoliciesActionEnum;
    marker?: string;
    maxItems?: number;
    userName: string;
    version: GetListUserPoliciesVersionEnum;
}
export declare class GetListUserPoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListUserPoliciesRequest extends SpeakeasyBase {
    queryParams: GetListUserPoliciesQueryParams;
    headers: GetListUserPoliciesHeaders;
}
export declare class GetListUserPoliciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
