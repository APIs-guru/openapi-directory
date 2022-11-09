import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribePlatformVersionActionEnum {
    DescribePlatformVersion = "DescribePlatformVersion"
}
export declare enum PostDescribePlatformVersionVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostDescribePlatformVersionQueryParams extends SpeakeasyBase {
    action: PostDescribePlatformVersionActionEnum;
    version: PostDescribePlatformVersionVersionEnum;
}
export declare class PostDescribePlatformVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribePlatformVersionRequest extends SpeakeasyBase {
    queryParams: PostDescribePlatformVersionQueryParams;
    headers: PostDescribePlatformVersionHeaders;
    request?: Uint8Array;
}
export declare class PostDescribePlatformVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
