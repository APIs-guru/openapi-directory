import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveNotificationChannelPathParams extends SpeakeasyBase {
    channelId: string;
    profilingGroupName: string;
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
    contentType: string;
    internalServerException?: any;
    removeNotificationChannelResponse?: shared.RemoveNotificationChannelResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
