import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListConnectionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListConnectionsXAmzTargetEnum {
    ComAmazonawsCodestarConnectionsCodeStarConnections20191201ListConnections = "com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListConnections"
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
    request: shared.ListConnectionsInput;
}
export declare class ListConnectionsResponse extends SpeakeasyBase {
    contentType: string;
    listConnectionsOutput?: shared.ListConnectionsOutput;
    statusCode: number;
}
