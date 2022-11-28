import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListConnectionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListConnectionsXAmzTargetEnum {
    AppRunnerListConnections = "AppRunner.ListConnections"
}
export declare class ListConnectionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListConnectionsXAmzTargetEnum;
}
export declare class ListConnectionsRequest extends SpeakeasyBase {
    queryParams: ListConnectionsQueryParams;
    headers: ListConnectionsHeaders;
    request: shared.ListConnectionsRequest;
}
export declare class ListConnectionsResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceErrorException?: any;
    invalidRequestException?: any;
    listConnectionsResponse?: shared.ListConnectionsResponse;
    statusCode: number;
}
