import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeServiceUpdatesActionEnum {
    DescribeServiceUpdates = "DescribeServiceUpdates"
}
export declare enum PostDescribeServiceUpdatesVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostDescribeServiceUpdatesQueryParams extends SpeakeasyBase {
    action: PostDescribeServiceUpdatesActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeServiceUpdatesVersionEnum;
}
export declare class PostDescribeServiceUpdatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeServiceUpdatesRequest extends SpeakeasyBase {
    queryParams: PostDescribeServiceUpdatesQueryParams;
    headers: PostDescribeServiceUpdatesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeServiceUpdatesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
