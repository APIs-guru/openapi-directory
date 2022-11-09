import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListLoggerDefinitionVersionsPathParams extends SpeakeasyBase {
    loggerDefinitionId: string;
}
export declare class ListLoggerDefinitionVersionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListLoggerDefinitionVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListLoggerDefinitionVersionsRequest extends SpeakeasyBase {
    pathParams: ListLoggerDefinitionVersionsPathParams;
    queryParams: ListLoggerDefinitionVersionsQueryParams;
    headers: ListLoggerDefinitionVersionsHeaders;
}
export declare class ListLoggerDefinitionVersionsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    listLoggerDefinitionVersionsResponse?: shared.ListLoggerDefinitionVersionsResponse;
    statusCode: number;
}
