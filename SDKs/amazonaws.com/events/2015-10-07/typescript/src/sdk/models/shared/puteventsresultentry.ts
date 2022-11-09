import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PutEventsResultEntry
/** 
 * Represents an event that failed to be submitted.
**/
export class PutEventsResultEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=EventId" })
  eventId?: string;
}
