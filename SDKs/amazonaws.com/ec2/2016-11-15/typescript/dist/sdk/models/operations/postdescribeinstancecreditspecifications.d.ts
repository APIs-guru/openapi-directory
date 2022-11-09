import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeInstanceCreditSpecificationsActionEnum {
    DescribeInstanceCreditSpecifications = "DescribeInstanceCreditSpecifications"
}
export declare enum PostDescribeInstanceCreditSpecificationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeInstanceCreditSpecificationsQueryParams extends SpeakeasyBase {
    action: PostDescribeInstanceCreditSpecificationsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeInstanceCreditSpecificationsVersionEnum;
}
export declare class PostDescribeInstanceCreditSpecificationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeInstanceCreditSpecificationsRequest extends SpeakeasyBase {
    queryParams: PostDescribeInstanceCreditSpecificationsQueryParams;
    headers: PostDescribeInstanceCreditSpecificationsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeInstanceCreditSpecificationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
