import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PreviewAgentsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum PreviewAgentsXAmzTargetEnum {
    InspectorServicePreviewAgents = "InspectorService.PreviewAgents"
}
export declare class PreviewAgentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PreviewAgentsXAmzTargetEnum;
}
export declare class PreviewAgentsRequest extends SpeakeasyBase {
    queryParams: PreviewAgentsQueryParams;
    headers: PreviewAgentsHeaders;
    request: shared.PreviewAgentsRequest;
}
export declare class PreviewAgentsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalException?: any;
    invalidCrossAccountRoleException?: any;
    invalidInputException?: any;
    noSuchEntityException?: any;
    previewAgentsResponse?: shared.PreviewAgentsResponse;
    statusCode: number;
}
