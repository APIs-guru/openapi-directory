import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateExclusionsPreviewXAmzTargetEnum {
    InspectorServiceCreateExclusionsPreview = "InspectorService.CreateExclusionsPreview"
}
export declare class CreateExclusionsPreviewHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateExclusionsPreviewXAmzTargetEnum;
}
export declare class CreateExclusionsPreviewRequest extends SpeakeasyBase {
    headers: CreateExclusionsPreviewHeaders;
    request: shared.CreateExclusionsPreviewRequest;
}
export declare class CreateExclusionsPreviewResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createExclusionsPreviewResponse?: shared.CreateExclusionsPreviewResponse;
    internalException?: any;
    invalidInputException?: any;
    noSuchEntityException?: any;
    previewGenerationInProgressException?: any;
    serviceTemporarilyUnavailableException?: any;
    statusCode: number;
}
