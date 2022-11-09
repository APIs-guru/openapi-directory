import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InventoryRetrievalJobInput
/** 
 * Provides options for specifying a range inventory retrieval job.
**/
export class InventoryRetrievalJobInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndDate" })
  endDate?: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: string;

  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=StartDate" })
  startDate?: string;
}
