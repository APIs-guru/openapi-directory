import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationSet } from "./configurationset";
import { DeliveryOptions } from "./deliveryoptions";
import { EventDestination } from "./eventdestination";
import { ReputationOptions } from "./reputationoptions";
import { TrackingOptions } from "./trackingoptions";



// DescribeConfigurationSetResponse
/** 
 * Represents the details of a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.
**/
export class DescribeConfigurationSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  configurationSet?: ConfigurationSet;

  @SpeakeasyMetadata()
  deliveryOptions?: DeliveryOptions;

  @SpeakeasyMetadata({ elemType: EventDestination })
  eventDestinations?: EventDestination[];

  @SpeakeasyMetadata()
  reputationOptions?: ReputationOptions;

  @SpeakeasyMetadata()
  trackingOptions?: TrackingOptions;
}
