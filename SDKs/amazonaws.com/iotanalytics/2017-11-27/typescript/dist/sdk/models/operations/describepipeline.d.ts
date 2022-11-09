import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribePipelinePathParams extends SpeakeasyBase {
    pipelineName: string;
}
export declare class DescribePipelineHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribePipelineRequest extends SpeakeasyBase {
    pathParams: DescribePipelinePathParams;
    headers: DescribePipelineHeaders;
}
export declare class DescribePipelineResponse extends SpeakeasyBase {
    contentType: string;
    describePipelineResponse?: shared.DescribePipelineResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
