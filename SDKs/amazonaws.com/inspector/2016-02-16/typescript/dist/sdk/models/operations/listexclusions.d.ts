import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListExclusionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListExclusionsXAmzTargetEnum {
    InspectorServiceListExclusions = "InspectorService.ListExclusions"
}
export declare class ListExclusionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListExclusionsXAmzTargetEnum;
}
export declare class ListExclusionsRequest extends SpeakeasyBase {
    queryParams: ListExclusionsQueryParams;
    headers: ListExclusionsHeaders;
    request: shared.ListExclusionsRequest;
}
export declare class ListExclusionsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalException?: any;
    invalidInputException?: any;
    listExclusionsResponse?: shared.ListExclusionsResponse;
    noSuchEntityException?: any;
    statusCode: number;
}
