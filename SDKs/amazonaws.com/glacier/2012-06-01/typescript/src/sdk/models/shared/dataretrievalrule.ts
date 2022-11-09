import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DataRetrievalRule
/** 
 * Data retrieval policy rule.
**/
export class DataRetrievalRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=BytesPerHour" })
  bytesPerHour?: number;

  @Metadata({ data: "json, name=Strategy" })
  strategy?: string;
}
