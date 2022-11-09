import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PutEventsRequestEntry
/** 
 * Represents an event to be submitted.
**/
export class PutEventsRequestEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=Detail" })
  detail?: string;

  @Metadata({ data: "json, name=DetailType" })
  detailType?: string;

  @Metadata({ data: "json, name=EventBusName" })
  eventBusName?: string;

  @Metadata({ data: "json, name=Resources" })
  resources?: string[];

  @Metadata({ data: "json, name=Source" })
  source?: string;

  @Metadata({ data: "json, name=Time" })
  time?: Date;

  @Metadata({ data: "json, name=TraceHeader" })
  traceHeader?: string;
}
