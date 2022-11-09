import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetTrailStatusResponse
/** 
 * Returns the objects or data listed below if successful. Otherwise, returns an error.
**/
export class GetTrailStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=IsLogging" })
  isLogging?: boolean;

  @Metadata({ data: "json, name=LatestCloudWatchLogsDeliveryError" })
  latestCloudWatchLogsDeliveryError?: string;

  @Metadata({ data: "json, name=LatestCloudWatchLogsDeliveryTime" })
  latestCloudWatchLogsDeliveryTime?: Date;

  @Metadata({ data: "json, name=LatestDeliveryAttemptSucceeded" })
  latestDeliveryAttemptSucceeded?: string;

  @Metadata({ data: "json, name=LatestDeliveryAttemptTime" })
  latestDeliveryAttemptTime?: string;

  @Metadata({ data: "json, name=LatestDeliveryError" })
  latestDeliveryError?: string;

  @Metadata({ data: "json, name=LatestDeliveryTime" })
  latestDeliveryTime?: Date;

  @Metadata({ data: "json, name=LatestDigestDeliveryError" })
  latestDigestDeliveryError?: string;

  @Metadata({ data: "json, name=LatestDigestDeliveryTime" })
  latestDigestDeliveryTime?: Date;

  @Metadata({ data: "json, name=LatestNotificationAttemptSucceeded" })
  latestNotificationAttemptSucceeded?: string;

  @Metadata({ data: "json, name=LatestNotificationAttemptTime" })
  latestNotificationAttemptTime?: string;

  @Metadata({ data: "json, name=LatestNotificationError" })
  latestNotificationError?: string;

  @Metadata({ data: "json, name=LatestNotificationTime" })
  latestNotificationTime?: Date;

  @Metadata({ data: "json, name=StartLoggingTime" })
  startLoggingTime?: Date;

  @Metadata({ data: "json, name=StopLoggingTime" })
  stopLoggingTime?: Date;

  @Metadata({ data: "json, name=TimeLoggingStarted" })
  timeLoggingStarted?: string;

  @Metadata({ data: "json, name=TimeLoggingStopped" })
  timeLoggingStopped?: string;
}
