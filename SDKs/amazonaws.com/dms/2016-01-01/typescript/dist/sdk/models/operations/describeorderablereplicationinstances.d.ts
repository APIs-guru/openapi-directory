import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeOrderableReplicationInstancesQueryParams extends SpeakeasyBase {
    marker?: string;
    maxRecords?: string;
}
export declare enum DescribeOrderableReplicationInstancesXAmzTargetEnum {
    AmazonDmSv20160101DescribeOrderableReplicationInstances = "AmazonDMSv20160101.DescribeOrderableReplicationInstances"
}
export declare class DescribeOrderableReplicationInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeOrderableReplicationInstancesXAmzTargetEnum;
}
export declare class DescribeOrderableReplicationInstancesRequest extends SpeakeasyBase {
    queryParams: DescribeOrderableReplicationInstancesQueryParams;
    headers: DescribeOrderableReplicationInstancesHeaders;
    request: shared.DescribeOrderableReplicationInstancesMessage;
}
export declare class DescribeOrderableReplicationInstancesResponse extends SpeakeasyBase {
    contentType: string;
    describeOrderableReplicationInstancesResponse?: shared.DescribeOrderableReplicationInstancesResponse;
    statusCode: number;
}
