import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeFpgaImagesActionEnum {
    DescribeFpgaImages = "DescribeFpgaImages"
}
export declare enum PostDescribeFpgaImagesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeFpgaImagesQueryParams extends SpeakeasyBase {
    action: PostDescribeFpgaImagesActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeFpgaImagesVersionEnum;
}
export declare class PostDescribeFpgaImagesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeFpgaImagesRequest extends SpeakeasyBase {
    queryParams: PostDescribeFpgaImagesQueryParams;
    headers: PostDescribeFpgaImagesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeFpgaImagesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
