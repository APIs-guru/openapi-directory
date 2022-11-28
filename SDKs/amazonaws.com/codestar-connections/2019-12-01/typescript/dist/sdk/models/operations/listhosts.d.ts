import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListHostsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListHostsXAmzTargetEnum {
    ComAmazonawsCodestarConnectionsCodeStarConnections20191201ListHosts = "com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListHosts"
}
export declare class ListHostsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListHostsXAmzTargetEnum;
}
export declare class ListHostsRequest extends SpeakeasyBase {
    queryParams: ListHostsQueryParams;
    headers: ListHostsHeaders;
    request: shared.ListHostsInput;
}
export declare class ListHostsResponse extends SpeakeasyBase {
    contentType: string;
    listHostsOutput?: shared.ListHostsOutput;
    statusCode: number;
}
