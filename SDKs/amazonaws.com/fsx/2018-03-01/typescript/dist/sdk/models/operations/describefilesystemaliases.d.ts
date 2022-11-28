import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeFileSystemAliasesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeFileSystemAliasesXAmzTargetEnum {
    AwsSimbaApiServiceV20180301DescribeFileSystemAliases = "AWSSimbaAPIService_v20180301.DescribeFileSystemAliases"
}
export declare class DescribeFileSystemAliasesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFileSystemAliasesXAmzTargetEnum;
}
export declare class DescribeFileSystemAliasesRequest extends SpeakeasyBase {
    queryParams: DescribeFileSystemAliasesQueryParams;
    headers: DescribeFileSystemAliasesHeaders;
    request: shared.DescribeFileSystemAliasesRequest;
}
export declare class DescribeFileSystemAliasesResponse extends SpeakeasyBase {
    badRequest?: any;
    contentType: string;
    describeFileSystemAliasesResponse?: shared.DescribeFileSystemAliasesResponse;
    fileSystemNotFound?: any;
    internalServerError?: any;
    statusCode: number;
}
