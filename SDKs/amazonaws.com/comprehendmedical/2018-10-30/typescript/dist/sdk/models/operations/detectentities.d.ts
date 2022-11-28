import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DetectEntitiesXAmzTargetEnum {
    ComprehendMedical20181030DetectEntities = "ComprehendMedical_20181030.DetectEntities"
}
export declare class DetectEntitiesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DetectEntitiesXAmzTargetEnum;
}
export declare class DetectEntitiesRequest extends SpeakeasyBase {
    headers: DetectEntitiesHeaders;
    request: shared.DetectEntitiesRequest;
}
export declare class DetectEntitiesResponse extends SpeakeasyBase {
    contentType: string;
    detectEntitiesResponse?: shared.DetectEntitiesResponse;
    internalServerException?: any;
    invalidEncodingException?: any;
    invalidRequestException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    textSizeLimitExceededException?: any;
    tooManyRequestsException?: any;
}
