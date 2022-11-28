import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeApplicableIndividualAssessmentsQueryParams extends SpeakeasyBase {
    marker?: string;
    maxRecords?: string;
}
export declare enum DescribeApplicableIndividualAssessmentsXAmzTargetEnum {
    AmazonDmSv20160101DescribeApplicableIndividualAssessments = "AmazonDMSv20160101.DescribeApplicableIndividualAssessments"
}
export declare class DescribeApplicableIndividualAssessmentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeApplicableIndividualAssessmentsXAmzTargetEnum;
}
export declare class DescribeApplicableIndividualAssessmentsRequest extends SpeakeasyBase {
    queryParams: DescribeApplicableIndividualAssessmentsQueryParams;
    headers: DescribeApplicableIndividualAssessmentsHeaders;
    request: shared.DescribeApplicableIndividualAssessmentsMessage;
}
export declare class DescribeApplicableIndividualAssessmentsResponse extends SpeakeasyBase {
    accessDeniedFault?: any;
    contentType: string;
    describeApplicableIndividualAssessmentsResponse?: shared.DescribeApplicableIndividualAssessmentsResponse;
    invalidResourceStateFault?: any;
    resourceNotFoundFault?: any;
    statusCode: number;
}
