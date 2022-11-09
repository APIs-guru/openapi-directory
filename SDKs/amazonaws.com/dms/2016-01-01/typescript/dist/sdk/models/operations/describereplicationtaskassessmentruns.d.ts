import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeReplicationTaskAssessmentRunsQueryParams extends SpeakeasyBase {
    marker?: string;
    maxRecords?: string;
}
export declare enum DescribeReplicationTaskAssessmentRunsXAmzTargetEnum {
    AmazonDmSv20160101DescribeReplicationTaskAssessmentRuns = "AmazonDMSv20160101.DescribeReplicationTaskAssessmentRuns"
}
export declare class DescribeReplicationTaskAssessmentRunsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeReplicationTaskAssessmentRunsXAmzTargetEnum;
}
export declare class DescribeReplicationTaskAssessmentRunsRequest extends SpeakeasyBase {
    queryParams: DescribeReplicationTaskAssessmentRunsQueryParams;
    headers: DescribeReplicationTaskAssessmentRunsHeaders;
    request: shared.DescribeReplicationTaskAssessmentRunsMessage;
}
export declare class DescribeReplicationTaskAssessmentRunsResponse extends SpeakeasyBase {
    contentType: string;
    describeReplicationTaskAssessmentRunsResponse?: shared.DescribeReplicationTaskAssessmentRunsResponse;
    resourceNotFoundFault?: any;
    statusCode: number;
}
