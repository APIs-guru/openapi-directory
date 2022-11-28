import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonitoringSubscription } from "./monitoringsubscription";



export class CreateMonitoringSubscriptionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  monitoringSubscription?: MonitoringSubscription;
}
