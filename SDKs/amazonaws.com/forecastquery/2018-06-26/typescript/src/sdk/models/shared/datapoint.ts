import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DataPoint
/** 
 * The forecast value for a specific date. Part of the <a>Forecast</a> object.
**/
export class DataPoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=Timestamp" })
  timestamp?: string;

  @Metadata({ data: "json, name=Value" })
  value?: number;
}
