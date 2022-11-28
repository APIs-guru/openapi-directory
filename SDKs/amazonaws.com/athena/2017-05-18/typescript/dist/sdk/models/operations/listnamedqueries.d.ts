import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListNamedQueriesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListNamedQueriesXAmzTargetEnum {
    AmazonAthenaListNamedQueries = "AmazonAthena.ListNamedQueries"
}
export declare class ListNamedQueriesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListNamedQueriesXAmzTargetEnum;
}
export declare class ListNamedQueriesRequest extends SpeakeasyBase {
    queryParams: ListNamedQueriesQueryParams;
    headers: ListNamedQueriesHeaders;
    request: shared.ListNamedQueriesInput;
}
export declare class ListNamedQueriesResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    listNamedQueriesOutput?: shared.ListNamedQueriesOutput;
    statusCode: number;
}
