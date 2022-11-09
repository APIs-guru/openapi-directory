import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ExportEbsVolumeRecommendationsXAmzTargetEnum {
    ComputeOptimizerServiceExportEbsVolumeRecommendations = "ComputeOptimizerService.ExportEBSVolumeRecommendations"
}
export declare class ExportEbsVolumeRecommendationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ExportEbsVolumeRecommendationsXAmzTargetEnum;
}
export declare class ExportEbsVolumeRecommendationsRequest extends SpeakeasyBase {
    headers: ExportEbsVolumeRecommendationsHeaders;
    request: shared.ExportEbsVolumeRecommendationsRequest;
}
export declare class ExportEbsVolumeRecommendationsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    exportEbsVolumeRecommendationsResponse?: shared.ExportEbsVolumeRecommendationsResponse;
    internalServerException?: any;
    invalidParameterValueException?: any;
    limitExceededException?: any;
    missingAuthenticationToken?: any;
    optInRequiredException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
