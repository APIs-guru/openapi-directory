import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeAggregateIdFormatActionEnum {
    DescribeAggregateIdFormat = "DescribeAggregateIdFormat"
}
export declare enum PostDescribeAggregateIdFormatVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeAggregateIdFormatQueryParams extends SpeakeasyBase {
    action: PostDescribeAggregateIdFormatActionEnum;
    version: PostDescribeAggregateIdFormatVersionEnum;
}
export declare class PostDescribeAggregateIdFormatHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeAggregateIdFormatRequest extends SpeakeasyBase {
    queryParams: PostDescribeAggregateIdFormatQueryParams;
    headers: PostDescribeAggregateIdFormatHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeAggregateIdFormatResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
