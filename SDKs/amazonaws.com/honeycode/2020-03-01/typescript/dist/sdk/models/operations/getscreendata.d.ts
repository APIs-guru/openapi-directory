import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetScreenDataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetScreenDataRequestBody extends SpeakeasyBase {
    appId: string;
    maxResults?: number;
    nextToken?: string;
    screenId: string;
    variables?: Map<string, shared.VariableValue>;
    workbookId: string;
}
export declare class GetScreenDataRequest extends SpeakeasyBase {
    headers: GetScreenDataHeaders;
    request: GetScreenDataRequestBody;
}
export declare class GetScreenDataResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getScreenDataResult?: shared.GetScreenDataResult;
    internalServerException?: any;
    requestTimeoutException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
