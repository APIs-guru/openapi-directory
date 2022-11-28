import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudWatchLogsDestinationDetails
/** 
 * The configuration details of the CloudWatch Logs destination.
**/
export class CloudWatchLogsDestinationDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  logGroup?: string;
}
