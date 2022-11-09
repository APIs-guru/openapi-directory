import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribePipelinesXAmzTargetEnum {
    DataPipelineDescribePipelines = "DataPipeline.DescribePipelines"
}
export declare class DescribePipelinesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePipelinesXAmzTargetEnum;
}
export declare class DescribePipelinesRequest extends SpeakeasyBase {
    headers: DescribePipelinesHeaders;
    request: shared.DescribePipelinesInput;
}
export declare class DescribePipelinesResponse extends SpeakeasyBase {
    contentType: string;
    describePipelinesOutput?: shared.DescribePipelinesOutput;
    internalServiceError?: any;
    invalidRequestException?: any;
    pipelineDeletedException?: any;
    pipelineNotFoundException?: any;
    statusCode: number;
}
