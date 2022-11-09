import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeScheduledInstancesActionEnum {
    DescribeScheduledInstances = "DescribeScheduledInstances"
}
export declare enum PostDescribeScheduledInstancesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeScheduledInstancesQueryParams extends SpeakeasyBase {
    action: PostDescribeScheduledInstancesActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeScheduledInstancesVersionEnum;
}
export declare class PostDescribeScheduledInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeScheduledInstancesRequest extends SpeakeasyBase {
    queryParams: PostDescribeScheduledInstancesQueryParams;
    headers: PostDescribeScheduledInstancesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeScheduledInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
