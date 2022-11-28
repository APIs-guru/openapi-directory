import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeFileSystemsQueryParams extends SpeakeasyBase {
    creationToken?: string;
    fileSystemId?: string;
    marker?: string;
    maxItems?: number;
}
export declare class DescribeFileSystemsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeFileSystemsRequest extends SpeakeasyBase {
    queryParams: DescribeFileSystemsQueryParams;
    headers: DescribeFileSystemsHeaders;
}
export declare class DescribeFileSystemsResponse extends SpeakeasyBase {
    badRequest?: any;
    contentType: string;
    describeFileSystemsResponse?: shared.DescribeFileSystemsResponse;
    fileSystemNotFound?: any;
    internalServerError?: any;
    statusCode: number;
}
