import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InventoryRetrievalJobDescription
/** 
 * Describes the options for a range inventory retrieval job.
**/
export class InventoryRetrievalJobDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndDate" })
  endDate?: string;

  @Metadata({ data: "json, name=Format" })
  format?: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: string;

  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=StartDate" })
  startDate?: string;
}
