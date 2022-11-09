import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EventTypeSummary
/** 
 * Returns information about an event that has triggered a notification rule.
**/
export class EventTypeSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventTypeId" })
  eventTypeId?: string;

  @Metadata({ data: "json, name=EventTypeName" })
  eventTypeName?: string;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType?: string;

  @Metadata({ data: "json, name=ServiceName" })
  serviceName?: string;
}
