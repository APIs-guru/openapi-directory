import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeReportDefinitionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeReportDefinitionsXAmzTargetEnum {
    AwsOrigamiServiceGatewayServiceDescribeReportDefinitions = "AWSOrigamiServiceGatewayService.DescribeReportDefinitions"
}
export declare class DescribeReportDefinitionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeReportDefinitionsXAmzTargetEnum;
}
export declare class DescribeReportDefinitionsRequest extends SpeakeasyBase {
    queryParams: DescribeReportDefinitionsQueryParams;
    headers: DescribeReportDefinitionsHeaders;
    request: shared.DescribeReportDefinitionsRequest;
}
export declare class DescribeReportDefinitionsResponse extends SpeakeasyBase {
    contentType: string;
    describeReportDefinitionsResponse?: shared.DescribeReportDefinitionsResponse;
    internalErrorException?: any;
    statusCode: number;
}
