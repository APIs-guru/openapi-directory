import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListConnectorDefinitionVersionsPathParams extends SpeakeasyBase {
    connectorDefinitionId: string;
}
export declare class ListConnectorDefinitionVersionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListConnectorDefinitionVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListConnectorDefinitionVersionsRequest extends SpeakeasyBase {
    pathParams: ListConnectorDefinitionVersionsPathParams;
    queryParams: ListConnectorDefinitionVersionsQueryParams;
    headers: ListConnectorDefinitionVersionsHeaders;
}
export declare class ListConnectorDefinitionVersionsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    listConnectorDefinitionVersionsResponse?: shared.ListConnectorDefinitionVersionsResponse;
    statusCode: number;
}
