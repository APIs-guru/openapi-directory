import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetTelemetryMetadataXAmzTargetEnum {
    InspectorServiceGetTelemetryMetadata = "InspectorService.GetTelemetryMetadata"
}
export declare class GetTelemetryMetadataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetTelemetryMetadataXAmzTargetEnum;
}
export declare class GetTelemetryMetadataRequest extends SpeakeasyBase {
    headers: GetTelemetryMetadataHeaders;
    request: shared.GetTelemetryMetadataRequest;
}
export declare class GetTelemetryMetadataResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getTelemetryMetadataResponse?: shared.GetTelemetryMetadataResponse;
    internalException?: any;
    invalidInputException?: any;
    noSuchEntityException?: any;
    statusCode: number;
}
