import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeBackupsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeBackupsXAmzTargetEnum {
    AwsSimbaApiServiceV20180301DescribeBackups = "AWSSimbaAPIService_v20180301.DescribeBackups"
}
export declare class DescribeBackupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeBackupsXAmzTargetEnum;
}
export declare class DescribeBackupsRequest extends SpeakeasyBase {
    queryParams: DescribeBackupsQueryParams;
    headers: DescribeBackupsHeaders;
    request: shared.DescribeBackupsRequest;
}
export declare class DescribeBackupsResponse extends SpeakeasyBase {
    backupNotFound?: any;
    badRequest?: any;
    contentType: string;
    describeBackupsResponse?: shared.DescribeBackupsResponse;
    fileSystemNotFound?: any;
    internalServerError?: any;
    statusCode: number;
    volumeNotFound?: any;
}
