import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PutEventsResultEntry
/** 
 * Represents an event that failed to be submitted.
**/
export class PutEventsResultEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=EventId" })
  eventId?: string;
}
