import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListTableColumnsPathParams extends SpeakeasyBase {
    tableId: string;
    workbookId: string;
}
export declare class ListTableColumnsQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare class ListTableColumnsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListTableColumnsRequest extends SpeakeasyBase {
    pathParams: ListTableColumnsPathParams;
    queryParams: ListTableColumnsQueryParams;
    headers: ListTableColumnsHeaders;
}
export declare class ListTableColumnsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listTableColumnsResult?: shared.ListTableColumnsResult;
    requestTimeoutException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
