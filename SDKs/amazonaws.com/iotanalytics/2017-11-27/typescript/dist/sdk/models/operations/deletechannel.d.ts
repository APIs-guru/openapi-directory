import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteChannelPathParams extends SpeakeasyBase {
    channelName: string;
}
export declare class DeleteChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteChannelRequest extends SpeakeasyBase {
    pathParams: DeleteChannelPathParams;
    headers: DeleteChannelHeaders;
}
export declare class DeleteChannelResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
