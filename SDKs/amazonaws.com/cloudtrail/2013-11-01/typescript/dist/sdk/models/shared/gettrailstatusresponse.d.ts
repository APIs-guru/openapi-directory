import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Returns the objects or data listed below if successful. Otherwise, returns an error.
**/
export declare class GetTrailStatusResponse extends SpeakeasyBase {
    isLogging?: boolean;
    latestCloudWatchLogsDeliveryError?: string;
    latestCloudWatchLogsDeliveryTime?: Date;
    latestDeliveryAttemptSucceeded?: string;
    latestDeliveryAttemptTime?: string;
    latestDeliveryError?: string;
    latestDeliveryTime?: Date;
    latestDigestDeliveryError?: string;
    latestDigestDeliveryTime?: Date;
    latestNotificationAttemptSucceeded?: string;
    latestNotificationAttemptTime?: string;
    latestNotificationError?: string;
    latestNotificationTime?: Date;
    startLoggingTime?: Date;
    stopLoggingTime?: Date;
    timeLoggingStarted?: string;
    timeLoggingStopped?: string;
}
