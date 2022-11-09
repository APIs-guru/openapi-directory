import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum StartEntitiesDetectionV2JobXAmzTargetEnum {
    ComprehendMedical20181030StartEntitiesDetectionV2Job = "ComprehendMedical_20181030.StartEntitiesDetectionV2Job"
}
export declare class StartEntitiesDetectionV2JobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartEntitiesDetectionV2JobXAmzTargetEnum;
}
export declare class StartEntitiesDetectionV2JobRequest extends SpeakeasyBase {
    headers: StartEntitiesDetectionV2JobHeaders;
    request: shared.StartEntitiesDetectionV2JobRequest;
}
export declare class StartEntitiesDetectionV2JobResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    startEntitiesDetectionV2JobResponse?: shared.StartEntitiesDetectionV2JobResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
