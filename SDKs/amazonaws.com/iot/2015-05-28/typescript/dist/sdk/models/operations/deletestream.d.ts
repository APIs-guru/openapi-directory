import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteStreamPathParams extends SpeakeasyBase {
    streamId: string;
}
export declare class DeleteStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteStreamRequest extends SpeakeasyBase {
    pathParams: DeleteStreamPathParams;
    headers: DeleteStreamHeaders;
}
export declare class DeleteStreamResponse extends SpeakeasyBase {
    contentType: string;
    deleteConflictException?: any;
    deleteStreamResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
