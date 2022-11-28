import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPlacementsPathParams extends SpeakeasyBase {
    projectName: string;
}
export declare class ListPlacementsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListPlacementsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListPlacementsRequest extends SpeakeasyBase {
    pathParams: ListPlacementsPathParams;
    queryParams: ListPlacementsQueryParams;
    headers: ListPlacementsHeaders;
}
export declare class ListPlacementsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listPlacementsResponse?: shared.ListPlacementsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
}
