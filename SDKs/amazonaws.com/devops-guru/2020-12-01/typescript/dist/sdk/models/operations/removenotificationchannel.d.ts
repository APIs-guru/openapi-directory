import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class RemoveNotificationChannelPathParams extends SpeakeasyBase {
    id: string;
}
export declare class RemoveNotificationChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class RemoveNotificationChannelRequest extends SpeakeasyBase {
    pathParams: RemoveNotificationChannelPathParams;
    headers: RemoveNotificationChannelHeaders;
}
export declare class RemoveNotificationChannelResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    removeNotificationChannelResponse?: Map<string, any>;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
