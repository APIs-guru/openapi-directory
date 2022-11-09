import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum StopEntitiesDetectionV2JobXAmzTargetEnum {
    ComprehendMedical20181030StopEntitiesDetectionV2Job = "ComprehendMedical_20181030.StopEntitiesDetectionV2Job"
}
export declare class StopEntitiesDetectionV2JobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopEntitiesDetectionV2JobXAmzTargetEnum;
}
export declare class StopEntitiesDetectionV2JobRequest extends SpeakeasyBase {
    headers: StopEntitiesDetectionV2JobHeaders;
    request: shared.StopEntitiesDetectionV2JobRequest;
}
export declare class StopEntitiesDetectionV2JobResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    stopEntitiesDetectionV2JobResponse?: shared.StopEntitiesDetectionV2JobResponse;
}
