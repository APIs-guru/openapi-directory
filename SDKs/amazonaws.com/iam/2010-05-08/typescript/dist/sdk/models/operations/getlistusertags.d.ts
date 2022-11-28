import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetListUserTagsActionEnum {
    ListUserTags = "ListUserTags"
}
export declare enum GetListUserTagsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetListUserTagsQueryParams extends SpeakeasyBase {
    action: GetListUserTagsActionEnum;
    marker?: string;
    maxItems?: number;
    userName: string;
    version: GetListUserTagsVersionEnum;
}
export declare class GetListUserTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListUserTagsRequest extends SpeakeasyBase {
    queryParams: GetListUserTagsQueryParams;
    headers: GetListUserTagsHeaders;
}
export declare class GetListUserTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
