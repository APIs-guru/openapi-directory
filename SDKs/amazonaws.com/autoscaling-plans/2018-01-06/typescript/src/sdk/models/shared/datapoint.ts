import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Datapoint
/** 
 * Represents a single value in the forecast data used for predictive scaling.
**/
export class Datapoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Timestamp" })
  timestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: number;
}
