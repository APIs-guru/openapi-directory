import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeFleetsActionEnum {
    DescribeFleets = "DescribeFleets"
}
export declare enum PostDescribeFleetsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeFleetsQueryParams extends SpeakeasyBase {
    action: PostDescribeFleetsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeFleetsVersionEnum;
}
export declare class PostDescribeFleetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeFleetsRequest extends SpeakeasyBase {
    queryParams: PostDescribeFleetsQueryParams;
    headers: PostDescribeFleetsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeFleetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
