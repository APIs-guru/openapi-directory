import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotificationProperty } from "./notificationproperty";



// Action
/** 
 * Defines an action to be initiated by a trigger.
**/
export class Action extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arguments" })
  arguments?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=CrawlerName" })
  crawlerName?: string;

  @SpeakeasyMetadata({ data: "json, name=JobName" })
  jobName?: string;

  @SpeakeasyMetadata({ data: "json, name=NotificationProperty" })
  notificationProperty?: NotificationProperty;

  @SpeakeasyMetadata({ data: "json, name=SecurityConfiguration" })
  securityConfiguration?: string;

  @SpeakeasyMetadata({ data: "json, name=Timeout" })
  timeout?: number;
}
