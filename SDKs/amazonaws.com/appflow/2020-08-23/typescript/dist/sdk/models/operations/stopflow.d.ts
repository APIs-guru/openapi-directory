import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StopFlowHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StopFlowRequestBody extends SpeakeasyBase {
    flowName: string;
}
export declare class StopFlowRequest extends SpeakeasyBase {
    headers: StopFlowHeaders;
    request: StopFlowRequestBody;
}
export declare class StopFlowResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    stopFlowResponse?: shared.StopFlowResponse;
    unsupportedOperationException?: any;
}
