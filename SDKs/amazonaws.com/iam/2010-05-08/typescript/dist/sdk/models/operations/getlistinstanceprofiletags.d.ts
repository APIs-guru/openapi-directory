import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetListInstanceProfileTagsActionEnum {
    ListInstanceProfileTags = "ListInstanceProfileTags"
}
export declare enum GetListInstanceProfileTagsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetListInstanceProfileTagsQueryParams extends SpeakeasyBase {
    action: GetListInstanceProfileTagsActionEnum;
    instanceProfileName: string;
    marker?: string;
    maxItems?: number;
    version: GetListInstanceProfileTagsVersionEnum;
}
export declare class GetListInstanceProfileTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListInstanceProfileTagsRequest extends SpeakeasyBase {
    queryParams: GetListInstanceProfileTagsQueryParams;
    headers: GetListInstanceProfileTagsHeaders;
}
export declare class GetListInstanceProfileTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
