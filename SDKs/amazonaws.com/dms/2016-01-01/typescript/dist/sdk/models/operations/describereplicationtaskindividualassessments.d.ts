import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeReplicationTaskIndividualAssessmentsQueryParams extends SpeakeasyBase {
    marker?: string;
    maxRecords?: string;
}
export declare enum DescribeReplicationTaskIndividualAssessmentsXAmzTargetEnum {
    AmazonDmSv20160101DescribeReplicationTaskIndividualAssessments = "AmazonDMSv20160101.DescribeReplicationTaskIndividualAssessments"
}
export declare class DescribeReplicationTaskIndividualAssessmentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeReplicationTaskIndividualAssessmentsXAmzTargetEnum;
}
export declare class DescribeReplicationTaskIndividualAssessmentsRequest extends SpeakeasyBase {
    queryParams: DescribeReplicationTaskIndividualAssessmentsQueryParams;
    headers: DescribeReplicationTaskIndividualAssessmentsHeaders;
    request: shared.DescribeReplicationTaskIndividualAssessmentsMessage;
}
export declare class DescribeReplicationTaskIndividualAssessmentsResponse extends SpeakeasyBase {
    contentType: string;
    describeReplicationTaskIndividualAssessmentsResponse?: shared.DescribeReplicationTaskIndividualAssessmentsResponse;
    resourceNotFoundFault?: any;
    statusCode: number;
}
