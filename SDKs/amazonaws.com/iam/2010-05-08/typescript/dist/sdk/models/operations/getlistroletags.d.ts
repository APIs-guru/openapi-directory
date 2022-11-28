import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetListRoleTagsActionEnum {
    ListRoleTags = "ListRoleTags"
}
export declare enum GetListRoleTagsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetListRoleTagsQueryParams extends SpeakeasyBase {
    action: GetListRoleTagsActionEnum;
    marker?: string;
    maxItems?: number;
    roleName: string;
    version: GetListRoleTagsVersionEnum;
}
export declare class GetListRoleTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListRoleTagsRequest extends SpeakeasyBase {
    queryParams: GetListRoleTagsQueryParams;
    headers: GetListRoleTagsHeaders;
}
export declare class GetListRoleTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
