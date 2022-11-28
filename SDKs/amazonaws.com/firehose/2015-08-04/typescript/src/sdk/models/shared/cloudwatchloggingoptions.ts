import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudWatchLoggingOptions
/** 
 * Describes the Amazon CloudWatch logging options for your delivery stream.
**/
export class CloudWatchLoggingOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LogGroupName" })
  logGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=LogStreamName" })
  logStreamName?: string;
}
