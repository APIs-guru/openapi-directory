import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNotificationConfigurationPathParams extends SpeakeasyBase {
    profilingGroupName: string;
}
export declare class GetNotificationConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetNotificationConfigurationRequest extends SpeakeasyBase {
    pathParams: GetNotificationConfigurationPathParams;
    headers: GetNotificationConfigurationHeaders;
}
export declare class GetNotificationConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    getNotificationConfigurationResponse?: shared.GetNotificationConfigurationResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
