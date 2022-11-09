import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DetectEntitiesV2XAmzTargetEnum {
    ComprehendMedical20181030DetectEntitiesV2 = "ComprehendMedical_20181030.DetectEntitiesV2"
}
export declare class DetectEntitiesV2Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DetectEntitiesV2XAmzTargetEnum;
}
export declare class DetectEntitiesV2Request extends SpeakeasyBase {
    headers: DetectEntitiesV2Headers;
    request: shared.DetectEntitiesV2Request;
}
export declare class DetectEntitiesV2Response extends SpeakeasyBase {
    contentType: string;
    detectEntitiesV2Response?: shared.DetectEntitiesV2Response;
    internalServerException?: any;
    invalidEncodingException?: any;
    invalidRequestException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    textSizeLimitExceededException?: any;
    tooManyRequestsException?: any;
}
