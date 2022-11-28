import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeIcd10CmInferenceJobXAmzTargetEnum {
    ComprehendMedical20181030DescribeIcd10CmInferenceJob = "ComprehendMedical_20181030.DescribeICD10CMInferenceJob"
}
export declare class DescribeIcd10CmInferenceJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeIcd10CmInferenceJobXAmzTargetEnum;
}
export declare class DescribeIcd10CmInferenceJobRequest extends SpeakeasyBase {
    headers: DescribeIcd10CmInferenceJobHeaders;
    request: shared.DescribeIcd10CmInferenceJobRequest;
}
export declare class DescribeIcd10CmInferenceJobResponse extends SpeakeasyBase {
    contentType: string;
    describeIcd10CmInferenceJobResponse?: shared.DescribeIcd10CmInferenceJobResponse;
    internalServerException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
