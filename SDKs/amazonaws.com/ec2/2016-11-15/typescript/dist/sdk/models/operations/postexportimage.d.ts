import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostExportImageActionEnum {
    ExportImage = "ExportImage"
}
export declare enum PostExportImageVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostExportImageQueryParams extends SpeakeasyBase {
    action: PostExportImageActionEnum;
    version: PostExportImageVersionEnum;
}
export declare class PostExportImageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostExportImageRequest extends SpeakeasyBase {
    queryParams: PostExportImageQueryParams;
    headers: PostExportImageHeaders;
    request?: Uint8Array;
}
export declare class PostExportImageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
