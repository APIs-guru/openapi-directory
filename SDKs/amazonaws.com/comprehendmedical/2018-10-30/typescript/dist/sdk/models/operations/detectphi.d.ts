import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DetectPhixAmzTargetEnum {
    ComprehendMedical20181030DetectPhi = "ComprehendMedical_20181030.DetectPHI"
}
export declare class DetectPhiHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DetectPhixAmzTargetEnum;
}
export declare class DetectPhiRequest extends SpeakeasyBase {
    headers: DetectPhiHeaders;
    request: shared.DetectPhiRequest;
}
export declare class DetectPhiResponse extends SpeakeasyBase {
    contentType: string;
    detectPhiResponse?: shared.DetectPhiResponse;
    internalServerException?: any;
    invalidEncodingException?: any;
    invalidRequestException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    textSizeLimitExceededException?: any;
    tooManyRequestsException?: any;
}
