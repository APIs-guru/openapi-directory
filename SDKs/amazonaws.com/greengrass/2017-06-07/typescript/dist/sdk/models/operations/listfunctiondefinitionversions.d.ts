import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListFunctionDefinitionVersionsPathParams extends SpeakeasyBase {
    functionDefinitionId: string;
}
export declare class ListFunctionDefinitionVersionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListFunctionDefinitionVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListFunctionDefinitionVersionsRequest extends SpeakeasyBase {
    pathParams: ListFunctionDefinitionVersionsPathParams;
    queryParams: ListFunctionDefinitionVersionsQueryParams;
    headers: ListFunctionDefinitionVersionsHeaders;
}
export declare class ListFunctionDefinitionVersionsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    listFunctionDefinitionVersionsResponse?: shared.ListFunctionDefinitionVersionsResponse;
    statusCode: number;
}
