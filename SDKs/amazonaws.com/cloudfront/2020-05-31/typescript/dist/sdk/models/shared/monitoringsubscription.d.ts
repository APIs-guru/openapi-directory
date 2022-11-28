import { SpeakeasyBase } from "../../../internal/utils";
import { RealtimeMetricsSubscriptionConfig } from "./realtimemetricssubscriptionconfig";
/**
 * A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.
**/
export declare class MonitoringSubscription extends SpeakeasyBase {
    realtimeMetricsSubscriptionConfig?: RealtimeMetricsSubscriptionConfig;
}
