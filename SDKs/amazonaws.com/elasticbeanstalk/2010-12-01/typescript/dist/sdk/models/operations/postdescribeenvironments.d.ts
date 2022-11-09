import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeEnvironmentsActionEnum {
    DescribeEnvironments = "DescribeEnvironments"
}
export declare enum PostDescribeEnvironmentsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostDescribeEnvironmentsQueryParams extends SpeakeasyBase {
    action: PostDescribeEnvironmentsActionEnum;
    version: PostDescribeEnvironmentsVersionEnum;
}
export declare class PostDescribeEnvironmentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeEnvironmentsRequest extends SpeakeasyBase {
    queryParams: PostDescribeEnvironmentsQueryParams;
    headers: PostDescribeEnvironmentsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeEnvironmentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
