import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Datapoint
/** 
 * Represents a single value in the forecast data used for predictive scaling.
**/
export class Datapoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=Timestamp" })
  timestamp?: Date;

  @Metadata({ data: "json, name=Value" })
  value?: number;
}
