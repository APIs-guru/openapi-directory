import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetRemoveTagsActionEnum {
    RemoveTags = "RemoveTags"
}
export declare enum GetRemoveTagsVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class GetRemoveTagsQueryParams extends SpeakeasyBase {
    action: GetRemoveTagsActionEnum;
    resourceArns: string[];
    tagKeys: string[];
    version: GetRemoveTagsVersionEnum;
}
export declare class GetRemoveTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRemoveTagsRequest extends SpeakeasyBase {
    queryParams: GetRemoveTagsQueryParams;
    headers: GetRemoveTagsHeaders;
}
export declare class GetRemoveTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
