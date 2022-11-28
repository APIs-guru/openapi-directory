import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListFindingsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListFindingsXAmzTargetEnum {
    InspectorServiceListFindings = "InspectorService.ListFindings"
}
export declare class ListFindingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListFindingsXAmzTargetEnum;
}
export declare class ListFindingsRequest extends SpeakeasyBase {
    queryParams: ListFindingsQueryParams;
    headers: ListFindingsHeaders;
    request: shared.ListFindingsRequest;
}
export declare class ListFindingsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalException?: any;
    invalidInputException?: any;
    listFindingsResponse?: shared.ListFindingsResponse;
    noSuchEntityException?: any;
    statusCode: number;
}
