import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchDimensionConfiguration } from "./cloudwatchdimensionconfiguration";



// CloudWatchDestination
/** 
 * <p>Contains information associated with an Amazon CloudWatch event destination to which email sending events are published.</p> <p>Event destinations, such as Amazon CloudWatch, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>
**/
export class CloudWatchDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CloudWatchDimensionConfiguration })
  dimensionConfigurations: CloudWatchDimensionConfiguration[];
}
