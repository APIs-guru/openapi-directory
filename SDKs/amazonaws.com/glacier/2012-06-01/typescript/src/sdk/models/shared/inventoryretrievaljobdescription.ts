import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InventoryRetrievalJobDescription
/** 
 * Describes the options for a range inventory retrieval job.
**/
export class InventoryRetrievalJobDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=Format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=StartDate" })
  startDate?: string;
}
