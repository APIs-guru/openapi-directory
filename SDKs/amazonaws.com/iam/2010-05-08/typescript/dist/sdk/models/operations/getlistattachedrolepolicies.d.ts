import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetListAttachedRolePoliciesActionEnum {
    ListAttachedRolePolicies = "ListAttachedRolePolicies"
}
export declare enum GetListAttachedRolePoliciesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetListAttachedRolePoliciesQueryParams extends SpeakeasyBase {
    action: GetListAttachedRolePoliciesActionEnum;
    marker?: string;
    maxItems?: number;
    pathPrefix?: string;
    roleName: string;
    version: GetListAttachedRolePoliciesVersionEnum;
}
export declare class GetListAttachedRolePoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListAttachedRolePoliciesRequest extends SpeakeasyBase {
    queryParams: GetListAttachedRolePoliciesQueryParams;
    headers: GetListAttachedRolePoliciesHeaders;
}
export declare class GetListAttachedRolePoliciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
