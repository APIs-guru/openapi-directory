import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeTableStatisticsQueryParams extends SpeakeasyBase {
    marker?: string;
    maxRecords?: string;
}
export declare enum DescribeTableStatisticsXAmzTargetEnum {
    AmazonDmSv20160101DescribeTableStatistics = "AmazonDMSv20160101.DescribeTableStatistics"
}
export declare class DescribeTableStatisticsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTableStatisticsXAmzTargetEnum;
}
export declare class DescribeTableStatisticsRequest extends SpeakeasyBase {
    queryParams: DescribeTableStatisticsQueryParams;
    headers: DescribeTableStatisticsHeaders;
    request: shared.DescribeTableStatisticsMessage;
}
export declare class DescribeTableStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    describeTableStatisticsResponse?: shared.DescribeTableStatisticsResponse;
    invalidResourceStateFault?: any;
    resourceNotFoundFault?: any;
    statusCode: number;
}
