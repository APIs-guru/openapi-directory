import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeInstanceTypesActionEnum {
    DescribeInstanceTypes = "DescribeInstanceTypes"
}
export declare enum PostDescribeInstanceTypesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeInstanceTypesQueryParams extends SpeakeasyBase {
    action: PostDescribeInstanceTypesActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeInstanceTypesVersionEnum;
}
export declare class PostDescribeInstanceTypesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeInstanceTypesRequest extends SpeakeasyBase {
    queryParams: PostDescribeInstanceTypesQueryParams;
    headers: PostDescribeInstanceTypesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeInstanceTypesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
