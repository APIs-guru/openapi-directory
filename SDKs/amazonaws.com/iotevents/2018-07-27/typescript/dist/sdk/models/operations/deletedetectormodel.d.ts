import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteDetectorModelPathParams extends SpeakeasyBase {
    detectorModelName: string;
}
export declare class DeleteDetectorModelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteDetectorModelRequest extends SpeakeasyBase {
    pathParams: DeleteDetectorModelPathParams;
    headers: DeleteDetectorModelHeaders;
}
export declare class DeleteDetectorModelResponse extends SpeakeasyBase {
    contentType: string;
    deleteDetectorModelResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
