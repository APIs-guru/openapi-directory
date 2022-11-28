import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InventoryRetrievalJobInput
/** 
 * Provides options for specifying a range inventory retrieval job.
**/
export class InventoryRetrievalJobInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=StartDate" })
  startDate?: string;
}
