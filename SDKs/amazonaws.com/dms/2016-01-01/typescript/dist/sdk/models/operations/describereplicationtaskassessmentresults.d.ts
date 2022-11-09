import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeReplicationTaskAssessmentResultsQueryParams extends SpeakeasyBase {
    marker?: string;
    maxRecords?: string;
}
export declare enum DescribeReplicationTaskAssessmentResultsXAmzTargetEnum {
    AmazonDmSv20160101DescribeReplicationTaskAssessmentResults = "AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults"
}
export declare class DescribeReplicationTaskAssessmentResultsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeReplicationTaskAssessmentResultsXAmzTargetEnum;
}
export declare class DescribeReplicationTaskAssessmentResultsRequest extends SpeakeasyBase {
    queryParams: DescribeReplicationTaskAssessmentResultsQueryParams;
    headers: DescribeReplicationTaskAssessmentResultsHeaders;
    request: shared.DescribeReplicationTaskAssessmentResultsMessage;
}
export declare class DescribeReplicationTaskAssessmentResultsResponse extends SpeakeasyBase {
    contentType: string;
    describeReplicationTaskAssessmentResultsResponse?: shared.DescribeReplicationTaskAssessmentResultsResponse;
    resourceNotFoundFault?: any;
    statusCode: number;
}
