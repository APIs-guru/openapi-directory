import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DurationUnitEnum } from "./durationunitenum";



// Duration
/** 
 * An object that represents a duration of time.
**/
export class Duration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: DurationUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
