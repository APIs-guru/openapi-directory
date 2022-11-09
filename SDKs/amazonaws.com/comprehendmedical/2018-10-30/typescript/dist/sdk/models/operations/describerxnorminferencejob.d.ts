import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeRxNormInferenceJobXAmzTargetEnum {
    ComprehendMedical20181030DescribeRxNormInferenceJob = "ComprehendMedical_20181030.DescribeRxNormInferenceJob"
}
export declare class DescribeRxNormInferenceJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRxNormInferenceJobXAmzTargetEnum;
}
export declare class DescribeRxNormInferenceJobRequest extends SpeakeasyBase {
    headers: DescribeRxNormInferenceJobHeaders;
    request: shared.DescribeRxNormInferenceJobRequest;
}
export declare class DescribeRxNormInferenceJobResponse extends SpeakeasyBase {
    contentType: string;
    describeRxNormInferenceJobResponse?: shared.DescribeRxNormInferenceJobResponse;
    internalServerException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
