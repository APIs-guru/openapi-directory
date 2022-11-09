import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeStemmingOptionsActionEnum {
    DescribeStemmingOptions = "DescribeStemmingOptions"
}
export declare enum PostDescribeStemmingOptionsVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class PostDescribeStemmingOptionsQueryParams extends SpeakeasyBase {
    action: PostDescribeStemmingOptionsActionEnum;
    version: PostDescribeStemmingOptionsVersionEnum;
}
export declare class PostDescribeStemmingOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeStemmingOptionsRequest extends SpeakeasyBase {
    queryParams: PostDescribeStemmingOptionsQueryParams;
    headers: PostDescribeStemmingOptionsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeStemmingOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
