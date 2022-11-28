import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeRankExpressionsActionEnum {
    DescribeRankExpressions = "DescribeRankExpressions"
}
export declare enum PostDescribeRankExpressionsVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class PostDescribeRankExpressionsQueryParams extends SpeakeasyBase {
    action: PostDescribeRankExpressionsActionEnum;
    version: PostDescribeRankExpressionsVersionEnum;
}
export declare class PostDescribeRankExpressionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeRankExpressionsRequest extends SpeakeasyBase {
    queryParams: PostDescribeRankExpressionsQueryParams;
    headers: PostDescribeRankExpressionsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeRankExpressionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
