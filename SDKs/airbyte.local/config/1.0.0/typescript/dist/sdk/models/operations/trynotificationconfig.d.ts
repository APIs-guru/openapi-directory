import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TryNotificationConfigRequest extends SpeakeasyBase {
    request: shared.Notification;
}
export declare class TryNotificationConfigResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;
    notificationRead?: shared.NotificationRead;
    statusCode: number;
}
