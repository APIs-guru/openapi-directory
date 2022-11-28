import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateDetectorModelPathParams extends SpeakeasyBase {
    detectorModelName: string;
}
export declare class UpdateDetectorModelHeaders extends SpeakeasyBase {
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
export declare class UpdateDetectorModelRequestBodyDetectorModelDefinition extends SpeakeasyBase {
    initialStateName?: string;
    states?: shared.State[];
}
export declare enum UpdateDetectorModelRequestBodyEvaluationMethodEnum {
    Batch = "BATCH",
    Serial = "SERIAL"
}
export declare class UpdateDetectorModelRequestBody extends SpeakeasyBase {
    detectorModelDefinition: UpdateDetectorModelRequestBodyDetectorModelDefinition;
    detectorModelDescription?: string;
    evaluationMethod?: UpdateDetectorModelRequestBodyEvaluationMethodEnum;
    roleArn: string;
}
export declare class UpdateDetectorModelRequest extends SpeakeasyBase {
    pathParams: UpdateDetectorModelPathParams;
    headers: UpdateDetectorModelHeaders;
    request: UpdateDetectorModelRequestBody;
}
export declare class UpdateDetectorModelResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    updateDetectorModelResponse?: shared.UpdateDetectorModelResponse;
}
