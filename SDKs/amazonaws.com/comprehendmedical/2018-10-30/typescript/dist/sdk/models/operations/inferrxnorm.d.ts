import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum InferRxNormXAmzTargetEnum {
    ComprehendMedical20181030InferRxNorm = "ComprehendMedical_20181030.InferRxNorm"
}
export declare class InferRxNormHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: InferRxNormXAmzTargetEnum;
}
export declare class InferRxNormRequest extends SpeakeasyBase {
    headers: InferRxNormHeaders;
    request: shared.InferRxNormRequest;
}
export declare class InferRxNormResponse extends SpeakeasyBase {
    contentType: string;
    inferRxNormResponse?: shared.InferRxNormResponse;
    internalServerException?: any;
    invalidEncodingException?: any;
    invalidRequestException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    textSizeLimitExceededException?: any;
    tooManyRequestsException?: any;
}
