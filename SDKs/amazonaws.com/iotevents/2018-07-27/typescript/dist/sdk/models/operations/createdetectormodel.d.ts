import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDetectorModelHeaders extends SpeakeasyBase {
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
export declare class CreateDetectorModelRequestBodyDetectorModelDefinition extends SpeakeasyBase {
    initialStateName?: string;
    states?: shared.State[];
}
export declare enum CreateDetectorModelRequestBodyEvaluationMethodEnum {
    Batch = "BATCH",
    Serial = "SERIAL"
}
export declare class CreateDetectorModelRequestBody extends SpeakeasyBase {
    detectorModelDefinition: CreateDetectorModelRequestBodyDetectorModelDefinition;
    detectorModelDescription?: string;
    detectorModelName: string;
    evaluationMethod?: CreateDetectorModelRequestBodyEvaluationMethodEnum;
    key?: string;
    roleArn: string;
    tags?: shared.Tag[];
}
export declare class CreateDetectorModelRequest extends SpeakeasyBase {
    headers: CreateDetectorModelHeaders;
    request: CreateDetectorModelRequestBody;
}
export declare class CreateDetectorModelResponse extends SpeakeasyBase {
    contentType: string;
    createDetectorModelResponse?: shared.CreateDetectorModelResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    resourceInUseException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
