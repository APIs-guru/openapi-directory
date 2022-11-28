import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EventTypeSummary
/** 
 * Returns information about an event that has triggered a notification rule.
**/
export class EventTypeSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventTypeId" })
  eventTypeId?: string;

  @SpeakeasyMetadata({ data: "json, name=EventTypeName" })
  eventTypeName?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceName" })
  serviceName?: string;
}
