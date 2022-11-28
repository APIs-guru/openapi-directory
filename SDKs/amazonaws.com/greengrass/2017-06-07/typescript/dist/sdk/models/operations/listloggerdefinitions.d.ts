import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListLoggerDefinitionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListLoggerDefinitionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListLoggerDefinitionsRequest extends SpeakeasyBase {
    queryParams: ListLoggerDefinitionsQueryParams;
    headers: ListLoggerDefinitionsHeaders;
}
export declare class ListLoggerDefinitionsResponse extends SpeakeasyBase {
    contentType: string;
    listLoggerDefinitionsResponse?: shared.ListLoggerDefinitionsResponse;
    statusCode: number;
}
