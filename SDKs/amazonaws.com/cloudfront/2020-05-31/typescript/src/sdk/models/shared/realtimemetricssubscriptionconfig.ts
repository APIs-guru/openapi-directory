import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RealtimeMetricsSubscriptionStatusEnum } from "./realtimemetricssubscriptionstatusenum";



// RealtimeMetricsSubscriptionConfig
/** 
 * A subscription configuration for additional CloudWatch metrics.
**/
export class RealtimeMetricsSubscriptionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  realtimeMetricsSubscriptionStatus: RealtimeMetricsSubscriptionStatusEnum;
}
