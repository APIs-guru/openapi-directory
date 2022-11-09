import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeScheduledInstanceAvailabilityActionEnum {
    DescribeScheduledInstanceAvailability = "DescribeScheduledInstanceAvailability"
}
export declare enum PostDescribeScheduledInstanceAvailabilityVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeScheduledInstanceAvailabilityQueryParams extends SpeakeasyBase {
    action: PostDescribeScheduledInstanceAvailabilityActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeScheduledInstanceAvailabilityVersionEnum;
}
export declare class PostDescribeScheduledInstanceAvailabilityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeScheduledInstanceAvailabilityRequest extends SpeakeasyBase {
    queryParams: PostDescribeScheduledInstanceAvailabilityQueryParams;
    headers: PostDescribeScheduledInstanceAvailabilityHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeScheduledInstanceAvailabilityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
