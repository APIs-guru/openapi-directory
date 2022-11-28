import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StartDetectorModelAnalysisHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Information that defines how a detector operates.
**/
export declare class StartDetectorModelAnalysisRequestBodyDetectorModelDefinition extends SpeakeasyBase {
    initialStateName?: string;
    states?: shared.State[];
}
export declare class StartDetectorModelAnalysisRequestBody extends SpeakeasyBase {
    detectorModelDefinition: StartDetectorModelAnalysisRequestBodyDetectorModelDefinition;
}
export declare class StartDetectorModelAnalysisRequest extends SpeakeasyBase {
    headers: StartDetectorModelAnalysisHeaders;
    request: StartDetectorModelAnalysisRequestBody;
}
export declare class StartDetectorModelAnalysisResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    serviceUnavailableException?: any;
    startDetectorModelAnalysisResponse?: shared.StartDetectorModelAnalysisResponse;
    statusCode: number;
    throttlingException?: any;
}
