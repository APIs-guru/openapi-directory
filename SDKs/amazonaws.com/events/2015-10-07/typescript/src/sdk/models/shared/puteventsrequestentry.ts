import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PutEventsRequestEntry
/** 
 * Represents an event to be submitted.
**/
export class PutEventsRequestEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=DetailType" })
  detailType?: string;

  @SpeakeasyMetadata({ data: "json, name=EventBusName" })
  eventBusName?: string;

  @SpeakeasyMetadata({ data: "json, name=Resources" })
  resources?: string[];

  @SpeakeasyMetadata({ data: "json, name=Source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=Time" })
  time?: Date;

  @SpeakeasyMetadata({ data: "json, name=TraceHeader" })
  traceHeader?: string;
}
