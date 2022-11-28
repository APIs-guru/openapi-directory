import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeReplicationSubnetGroupsQueryParams extends SpeakeasyBase {
    marker?: string;
    maxRecords?: string;
}
export declare enum DescribeReplicationSubnetGroupsXAmzTargetEnum {
    AmazonDmSv20160101DescribeReplicationSubnetGroups = "AmazonDMSv20160101.DescribeReplicationSubnetGroups"
}
export declare class DescribeReplicationSubnetGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeReplicationSubnetGroupsXAmzTargetEnum;
}
export declare class DescribeReplicationSubnetGroupsRequest extends SpeakeasyBase {
    queryParams: DescribeReplicationSubnetGroupsQueryParams;
    headers: DescribeReplicationSubnetGroupsHeaders;
    request: shared.DescribeReplicationSubnetGroupsMessage;
}
export declare class DescribeReplicationSubnetGroupsResponse extends SpeakeasyBase {
    contentType: string;
    describeReplicationSubnetGroupsResponse?: shared.DescribeReplicationSubnetGroupsResponse;
    resourceNotFoundFault?: any;
    statusCode: number;
}
