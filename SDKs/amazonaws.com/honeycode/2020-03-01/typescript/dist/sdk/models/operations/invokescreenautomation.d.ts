import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InvokeScreenAutomationPathParams extends SpeakeasyBase {
    appId: string;
    automationId: string;
    screenId: string;
    workbookId: string;
}
export declare class InvokeScreenAutomationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class InvokeScreenAutomationRequestBody extends SpeakeasyBase {
    clientRequestToken?: string;
    rowId?: string;
    variables?: Map<string, shared.VariableValue>;
}
export declare class InvokeScreenAutomationRequest extends SpeakeasyBase {
    pathParams: InvokeScreenAutomationPathParams;
    headers: InvokeScreenAutomationHeaders;
    request: InvokeScreenAutomationRequestBody;
}
export declare class InvokeScreenAutomationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    automationExecutionException?: any;
    automationExecutionTimeoutException?: any;
    contentType: string;
    internalServerException?: any;
    invokeScreenAutomationResult?: shared.InvokeScreenAutomationResult;
    requestTimeoutException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
