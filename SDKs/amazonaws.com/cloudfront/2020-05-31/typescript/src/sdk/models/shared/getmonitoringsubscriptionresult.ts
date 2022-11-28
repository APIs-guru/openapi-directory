import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonitoringSubscription } from "./monitoringsubscription";



export class GetMonitoringSubscriptionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  monitoringSubscription?: MonitoringSubscription;
}
