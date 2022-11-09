import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PutPartnerEventsResultEntry
/** 
 * Represents an event that a partner tried to generate, but failed.
**/
export class PutPartnerEventsResultEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=EventId" })
  eventId?: string;
}
