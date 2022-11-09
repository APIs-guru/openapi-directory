import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NotificationProperty } from "./notificationproperty";


// Action
/** 
 * Defines an action to be initiated by a trigger.
**/
export class Action extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arguments" })
  arguments?: Map<string, string>;

  @Metadata({ data: "json, name=CrawlerName" })
  crawlerName?: string;

  @Metadata({ data: "json, name=JobName" })
  jobName?: string;

  @Metadata({ data: "json, name=NotificationProperty" })
  notificationProperty?: NotificationProperty;

  @Metadata({ data: "json, name=SecurityConfiguration" })
  securityConfiguration?: string;

  @Metadata({ data: "json, name=Timeout" })
  timeout?: number;
}
