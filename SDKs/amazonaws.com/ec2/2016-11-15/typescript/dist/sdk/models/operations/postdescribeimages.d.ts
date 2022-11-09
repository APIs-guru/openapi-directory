import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeImagesActionEnum {
    DescribeImages = "DescribeImages"
}
export declare enum PostDescribeImagesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeImagesQueryParams extends SpeakeasyBase {
    action: PostDescribeImagesActionEnum;
    version: PostDescribeImagesVersionEnum;
}
export declare class PostDescribeImagesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeImagesRequest extends SpeakeasyBase {
    queryParams: PostDescribeImagesQueryParams;
    headers: PostDescribeImagesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeImagesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
