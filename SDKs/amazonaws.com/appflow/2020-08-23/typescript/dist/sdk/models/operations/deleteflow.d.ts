import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteFlowHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteFlowRequestBody extends SpeakeasyBase {
    flowName: string;
    forceDelete?: boolean;
}
export declare class DeleteFlowRequest extends SpeakeasyBase {
    headers: DeleteFlowHeaders;
    request: DeleteFlowRequestBody;
}
export declare class DeleteFlowResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    deleteFlowResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
