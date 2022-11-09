import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeConversionTasksActionEnum {
    DescribeConversionTasks = "DescribeConversionTasks"
}
export declare enum PostDescribeConversionTasksVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeConversionTasksQueryParams extends SpeakeasyBase {
    action: PostDescribeConversionTasksActionEnum;
    version: PostDescribeConversionTasksVersionEnum;
}
export declare class PostDescribeConversionTasksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeConversionTasksRequest extends SpeakeasyBase {
    queryParams: PostDescribeConversionTasksQueryParams;
    headers: PostDescribeConversionTasksHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeConversionTasksResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
