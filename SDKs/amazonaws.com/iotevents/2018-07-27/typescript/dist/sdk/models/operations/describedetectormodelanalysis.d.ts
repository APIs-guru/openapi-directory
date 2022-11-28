import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeDetectorModelAnalysisPathParams extends SpeakeasyBase {
    analysisId: string;
}
export declare class DescribeDetectorModelAnalysisHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeDetectorModelAnalysisRequest extends SpeakeasyBase {
    pathParams: DescribeDetectorModelAnalysisPathParams;
    headers: DescribeDetectorModelAnalysisHeaders;
}
export declare class DescribeDetectorModelAnalysisResponse extends SpeakeasyBase {
    contentType: string;
    describeDetectorModelAnalysisResponse?: shared.DescribeDetectorModelAnalysisResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
