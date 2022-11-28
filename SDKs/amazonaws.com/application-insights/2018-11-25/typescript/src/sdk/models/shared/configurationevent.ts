import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationEventResourceTypeEnum } from "./configurationeventresourcetypeenum";
import { ConfigurationEventStatusEnum } from "./configurationeventstatusenum";



// ConfigurationEvent
/** 
 *  The event information. 
**/
export class ConfigurationEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventDetail" })
  eventDetail?: string;

  @SpeakeasyMetadata({ data: "json, name=EventResourceName" })
  eventResourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=EventResourceType" })
  eventResourceType?: ConfigurationEventResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=EventStatus" })
  eventStatus?: ConfigurationEventStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=EventTime" })
  eventTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=MonitoredResourceARN" })
  monitoredResourceArn?: string;
}
