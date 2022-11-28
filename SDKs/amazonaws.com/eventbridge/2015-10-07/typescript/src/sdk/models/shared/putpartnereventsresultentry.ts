import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PutPartnerEventsResultEntry
/** 
 * Represents an event that a partner tried to generate, but failed.
**/
export class PutPartnerEventsResultEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=EventId" })
  eventId?: string;
}
