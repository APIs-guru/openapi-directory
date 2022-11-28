import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeFileSystemsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeFileSystemsXAmzTargetEnum {
    AwsSimbaApiServiceV20180301DescribeFileSystems = "AWSSimbaAPIService_v20180301.DescribeFileSystems"
}
export declare class DescribeFileSystemsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFileSystemsXAmzTargetEnum;
}
export declare class DescribeFileSystemsRequest extends SpeakeasyBase {
    queryParams: DescribeFileSystemsQueryParams;
    headers: DescribeFileSystemsHeaders;
    request: shared.DescribeFileSystemsRequest;
}
export declare class DescribeFileSystemsResponse extends SpeakeasyBase {
    badRequest?: any;
    contentType: string;
    describeFileSystemsResponse?: shared.DescribeFileSystemsResponse;
    fileSystemNotFound?: any;
    internalServerError?: any;
    statusCode: number;
}
