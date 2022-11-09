import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CloudWatchLoggingOptions
/** 
 * Describes the Amazon CloudWatch logging options for your delivery stream.
**/
export class CloudWatchLoggingOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=LogGroupName" })
  logGroupName?: string;

  @Metadata({ data: "json, name=LogStreamName" })
  logStreamName?: string;
}
