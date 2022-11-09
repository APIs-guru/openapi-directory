import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DurationUnitEnum } from "./durationunitenum";


// Duration
/** 
 * An object that represents a duration of time.
**/
export class Duration extends SpeakeasyBase {
  @Metadata({ data: "json, name=unit" })
  unit?: DurationUnitEnum;

  @Metadata({ data: "json, name=value" })
  value?: number;
}
