import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostImportImageActionEnum {
    ImportImage = "ImportImage"
}
export declare enum PostImportImageVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostImportImageQueryParams extends SpeakeasyBase {
    action: PostImportImageActionEnum;
    version: PostImportImageVersionEnum;
}
export declare class PostImportImageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostImportImageRequest extends SpeakeasyBase {
    queryParams: PostImportImageQueryParams;
    headers: PostImportImageHeaders;
    request?: Uint8Array;
}
export declare class PostImportImageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
