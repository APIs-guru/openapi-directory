import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigurationEventResourceTypeEnum } from "./configurationeventresourcetypeenum";
import { ConfigurationEventStatusEnum } from "./configurationeventstatusenum";


// ConfigurationEvent
/** 
 *  The event information. 
**/
export class ConfigurationEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventDetail" })
  eventDetail?: string;

  @Metadata({ data: "json, name=EventResourceName" })
  eventResourceName?: string;

  @Metadata({ data: "json, name=EventResourceType" })
  eventResourceType?: ConfigurationEventResourceTypeEnum;

  @Metadata({ data: "json, name=EventStatus" })
  eventStatus?: ConfigurationEventStatusEnum;

  @Metadata({ data: "json, name=EventTime" })
  eventTime?: Date;

  @Metadata({ data: "json, name=MonitoredResourceARN" })
  monitoredResourceArn?: string;
}
