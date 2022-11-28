import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeReplicationInstancesQueryParams extends SpeakeasyBase {
    marker?: string;
    maxRecords?: string;
}
export declare enum DescribeReplicationInstancesXAmzTargetEnum {
    AmazonDmSv20160101DescribeReplicationInstances = "AmazonDMSv20160101.DescribeReplicationInstances"
}
export declare class DescribeReplicationInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeReplicationInstancesXAmzTargetEnum;
}
export declare class DescribeReplicationInstancesRequest extends SpeakeasyBase {
    queryParams: DescribeReplicationInstancesQueryParams;
    headers: DescribeReplicationInstancesHeaders;
    request: shared.DescribeReplicationInstancesMessage;
}
export declare class DescribeReplicationInstancesResponse extends SpeakeasyBase {
    contentType: string;
    describeReplicationInstancesResponse?: shared.DescribeReplicationInstancesResponse;
    resourceNotFoundFault?: any;
    statusCode: number;
}
