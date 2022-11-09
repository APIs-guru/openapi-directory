import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetListRolePoliciesActionEnum {
    ListRolePolicies = "ListRolePolicies"
}
export declare enum GetListRolePoliciesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetListRolePoliciesQueryParams extends SpeakeasyBase {
    action: GetListRolePoliciesActionEnum;
    marker?: string;
    maxItems?: number;
    roleName: string;
    version: GetListRolePoliciesVersionEnum;
}
export declare class GetListRolePoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListRolePoliciesRequest extends SpeakeasyBase {
    queryParams: GetListRolePoliciesQueryParams;
    headers: GetListRolePoliciesHeaders;
}
export declare class GetListRolePoliciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
