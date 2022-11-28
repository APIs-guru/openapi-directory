import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCoreDefinitionVersionsPathParams extends SpeakeasyBase {
    coreDefinitionId: string;
}
export declare class ListCoreDefinitionVersionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListCoreDefinitionVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListCoreDefinitionVersionsRequest extends SpeakeasyBase {
    pathParams: ListCoreDefinitionVersionsPathParams;
    queryParams: ListCoreDefinitionVersionsQueryParams;
    headers: ListCoreDefinitionVersionsHeaders;
}
export declare class ListCoreDefinitionVersionsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    listCoreDefinitionVersionsResponse?: shared.ListCoreDefinitionVersionsResponse;
    statusCode: number;
}
