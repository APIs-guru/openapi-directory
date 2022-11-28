import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeExpressionsActionEnum {
    DescribeExpressions = "DescribeExpressions"
}
export declare enum PostDescribeExpressionsVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class PostDescribeExpressionsQueryParams extends SpeakeasyBase {
    action: PostDescribeExpressionsActionEnum;
    version: PostDescribeExpressionsVersionEnum;
}
export declare class PostDescribeExpressionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeExpressionsRequest extends SpeakeasyBase {
    queryParams: PostDescribeExpressionsQueryParams;
    headers: PostDescribeExpressionsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeExpressionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
