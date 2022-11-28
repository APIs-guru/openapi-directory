import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetTrailStatusResponse
/** 
 * Returns the objects or data listed below if successful. Otherwise, returns an error.
**/
export class GetTrailStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IsLogging" })
  isLogging?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LatestCloudWatchLogsDeliveryError" })
  latestCloudWatchLogsDeliveryError?: string;

  @SpeakeasyMetadata({ data: "json, name=LatestCloudWatchLogsDeliveryTime" })
  latestCloudWatchLogsDeliveryTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LatestDeliveryAttemptSucceeded" })
  latestDeliveryAttemptSucceeded?: string;

  @SpeakeasyMetadata({ data: "json, name=LatestDeliveryAttemptTime" })
  latestDeliveryAttemptTime?: string;

  @SpeakeasyMetadata({ data: "json, name=LatestDeliveryError" })
  latestDeliveryError?: string;

  @SpeakeasyMetadata({ data: "json, name=LatestDeliveryTime" })
  latestDeliveryTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LatestDigestDeliveryError" })
  latestDigestDeliveryError?: string;

  @SpeakeasyMetadata({ data: "json, name=LatestDigestDeliveryTime" })
  latestDigestDeliveryTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LatestNotificationAttemptSucceeded" })
  latestNotificationAttemptSucceeded?: string;

  @SpeakeasyMetadata({ data: "json, name=LatestNotificationAttemptTime" })
  latestNotificationAttemptTime?: string;

  @SpeakeasyMetadata({ data: "json, name=LatestNotificationError" })
  latestNotificationError?: string;

  @SpeakeasyMetadata({ data: "json, name=LatestNotificationTime" })
  latestNotificationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=StartLoggingTime" })
  startLoggingTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=StopLoggingTime" })
  stopLoggingTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=TimeLoggingStarted" })
  timeLoggingStarted?: string;

  @SpeakeasyMetadata({ data: "json, name=TimeLoggingStopped" })
  timeLoggingStopped?: string;
}
