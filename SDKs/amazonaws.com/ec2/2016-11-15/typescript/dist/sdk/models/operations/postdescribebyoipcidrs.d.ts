import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeByoipCidrsActionEnum {
    DescribeByoipCidrs = "DescribeByoipCidrs"
}
export declare enum PostDescribeByoipCidrsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeByoipCidrsQueryParams extends SpeakeasyBase {
    action: PostDescribeByoipCidrsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeByoipCidrsVersionEnum;
}
export declare class PostDescribeByoipCidrsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeByoipCidrsRequest extends SpeakeasyBase {
    queryParams: PostDescribeByoipCidrsQueryParams;
    headers: PostDescribeByoipCidrsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeByoipCidrsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
