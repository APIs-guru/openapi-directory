import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddNotificationChannelsPathParams extends SpeakeasyBase {
    profilingGroupName: string;
}
export declare class AddNotificationChannelsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AddNotificationChannelsRequestBody extends SpeakeasyBase {
    channels: shared.Channel[];
}
export declare class AddNotificationChannelsRequest extends SpeakeasyBase {
    pathParams: AddNotificationChannelsPathParams;
    headers: AddNotificationChannelsHeaders;
    request: AddNotificationChannelsRequestBody;
}
export declare class AddNotificationChannelsResponse extends SpeakeasyBase {
    addNotificationChannelsResponse?: shared.AddNotificationChannelsResponse;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
