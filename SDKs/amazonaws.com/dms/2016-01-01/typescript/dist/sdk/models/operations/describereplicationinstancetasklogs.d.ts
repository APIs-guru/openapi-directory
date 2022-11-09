import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeReplicationInstanceTaskLogsQueryParams extends SpeakeasyBase {
    marker?: string;
    maxRecords?: string;
}
export declare enum DescribeReplicationInstanceTaskLogsXAmzTargetEnum {
    AmazonDmSv20160101DescribeReplicationInstanceTaskLogs = "AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs"
}
export declare class DescribeReplicationInstanceTaskLogsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeReplicationInstanceTaskLogsXAmzTargetEnum;
}
export declare class DescribeReplicationInstanceTaskLogsRequest extends SpeakeasyBase {
    queryParams: DescribeReplicationInstanceTaskLogsQueryParams;
    headers: DescribeReplicationInstanceTaskLogsHeaders;
    request: shared.DescribeReplicationInstanceTaskLogsMessage;
}
export declare class DescribeReplicationInstanceTaskLogsResponse extends SpeakeasyBase {
    contentType: string;
    describeReplicationInstanceTaskLogsResponse?: shared.DescribeReplicationInstanceTaskLogsResponse;
    invalidResourceStateFault?: any;
    resourceNotFoundFault?: any;
    statusCode: number;
}
