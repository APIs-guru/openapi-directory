import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListFunctionDefinitionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListFunctionDefinitionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListFunctionDefinitionsRequest extends SpeakeasyBase {
    queryParams: ListFunctionDefinitionsQueryParams;
    headers: ListFunctionDefinitionsHeaders;
}
export declare class ListFunctionDefinitionsResponse extends SpeakeasyBase {
    contentType: string;
    listFunctionDefinitionsResponse?: shared.ListFunctionDefinitionsResponse;
    statusCode: number;
}
