import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeApplicationsActionEnum {
    DescribeApplications = "DescribeApplications"
}
export declare enum PostDescribeApplicationsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostDescribeApplicationsQueryParams extends SpeakeasyBase {
    action: PostDescribeApplicationsActionEnum;
    version: PostDescribeApplicationsVersionEnum;
}
export declare class PostDescribeApplicationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeApplicationsRequest extends SpeakeasyBase {
    queryParams: PostDescribeApplicationsQueryParams;
    headers: PostDescribeApplicationsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeApplicationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
