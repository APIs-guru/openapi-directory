import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DataRetrievalRule
/** 
 * Data retrieval policy rule.
**/
export class DataRetrievalRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BytesPerHour" })
  bytesPerHour?: number;

  @SpeakeasyMetadata({ data: "json, name=Strategy" })
  strategy?: string;
}
