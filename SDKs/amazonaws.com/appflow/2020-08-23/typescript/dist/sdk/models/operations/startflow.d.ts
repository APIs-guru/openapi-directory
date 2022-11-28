import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StartFlowHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartFlowRequestBody extends SpeakeasyBase {
    flowName: string;
}
export declare class StartFlowRequest extends SpeakeasyBase {
    headers: StartFlowHeaders;
    request: StartFlowRequestBody;
}
export declare class StartFlowResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    startFlowResponse?: shared.StartFlowResponse;
    statusCode: number;
}
