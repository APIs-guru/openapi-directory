import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RealtimeMetricsSubscriptionConfig } from "./realtimemetricssubscriptionconfig";



// MonitoringSubscription
/** 
 * A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.
**/
export class MonitoringSubscription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  realtimeMetricsSubscriptionConfig?: RealtimeMetricsSubscriptionConfig;
}
