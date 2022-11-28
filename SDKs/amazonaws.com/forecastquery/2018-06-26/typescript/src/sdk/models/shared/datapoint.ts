import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DataPoint
/** 
 * The forecast value for a specific date. Part of the <a>Forecast</a> object.
**/
export class DataPoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Timestamp" })
  timestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: number;
}
