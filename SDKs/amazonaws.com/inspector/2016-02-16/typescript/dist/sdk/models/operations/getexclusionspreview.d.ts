import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetExclusionsPreviewQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetExclusionsPreviewXAmzTargetEnum {
    InspectorServiceGetExclusionsPreview = "InspectorService.GetExclusionsPreview"
}
export declare class GetExclusionsPreviewHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetExclusionsPreviewXAmzTargetEnum;
}
export declare class GetExclusionsPreviewRequest extends SpeakeasyBase {
    queryParams: GetExclusionsPreviewQueryParams;
    headers: GetExclusionsPreviewHeaders;
    request: shared.GetExclusionsPreviewRequest;
}
export declare class GetExclusionsPreviewResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getExclusionsPreviewResponse?: shared.GetExclusionsPreviewResponse;
    internalException?: any;
    invalidInputException?: any;
    noSuchEntityException?: any;
    statusCode: number;
}
