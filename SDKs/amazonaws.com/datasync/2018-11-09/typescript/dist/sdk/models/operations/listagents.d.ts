import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAgentsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListAgentsXAmzTargetEnum {
    FmrsServiceListAgents = "FmrsService.ListAgents"
}
export declare class ListAgentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAgentsXAmzTargetEnum;
}
export declare class ListAgentsRequest extends SpeakeasyBase {
    queryParams: ListAgentsQueryParams;
    headers: ListAgentsHeaders;
    request: shared.ListAgentsRequest;
}
export declare class ListAgentsResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    invalidRequestException?: any;
    listAgentsResponse?: shared.ListAgentsResponse;
    statusCode: number;
}
