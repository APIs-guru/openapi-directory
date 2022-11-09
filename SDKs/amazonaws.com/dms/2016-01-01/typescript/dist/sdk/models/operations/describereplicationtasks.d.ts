import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeReplicationTasksQueryParams extends SpeakeasyBase {
    marker?: string;
    maxRecords?: string;
}
export declare enum DescribeReplicationTasksXAmzTargetEnum {
    AmazonDmSv20160101DescribeReplicationTasks = "AmazonDMSv20160101.DescribeReplicationTasks"
}
export declare class DescribeReplicationTasksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeReplicationTasksXAmzTargetEnum;
}
export declare class DescribeReplicationTasksRequest extends SpeakeasyBase {
    queryParams: DescribeReplicationTasksQueryParams;
    headers: DescribeReplicationTasksHeaders;
    request: shared.DescribeReplicationTasksMessage;
}
export declare class DescribeReplicationTasksResponse extends SpeakeasyBase {
    contentType: string;
    describeReplicationTasksResponse?: shared.DescribeReplicationTasksResponse;
    resourceNotFoundFault?: any;
    statusCode: number;
}
