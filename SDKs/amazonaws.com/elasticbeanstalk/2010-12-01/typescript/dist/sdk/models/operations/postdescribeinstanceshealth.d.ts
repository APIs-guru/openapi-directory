import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeInstancesHealthActionEnum {
    DescribeInstancesHealth = "DescribeInstancesHealth"
}
export declare enum PostDescribeInstancesHealthVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostDescribeInstancesHealthQueryParams extends SpeakeasyBase {
    action: PostDescribeInstancesHealthActionEnum;
    version: PostDescribeInstancesHealthVersionEnum;
}
export declare class PostDescribeInstancesHealthHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeInstancesHealthRequest extends SpeakeasyBase {
    queryParams: PostDescribeInstancesHealthQueryParams;
    headers: PostDescribeInstancesHealthHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeInstancesHealthResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
