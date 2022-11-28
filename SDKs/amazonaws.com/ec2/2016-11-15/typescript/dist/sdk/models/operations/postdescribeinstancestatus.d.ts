import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeInstanceStatusActionEnum {
    DescribeInstanceStatus = "DescribeInstanceStatus"
}
export declare enum PostDescribeInstanceStatusVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeInstanceStatusQueryParams extends SpeakeasyBase {
    action: PostDescribeInstanceStatusActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeInstanceStatusVersionEnum;
}
export declare class PostDescribeInstanceStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeInstanceStatusRequest extends SpeakeasyBase {
    queryParams: PostDescribeInstanceStatusQueryParams;
    headers: PostDescribeInstanceStatusHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeInstanceStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
