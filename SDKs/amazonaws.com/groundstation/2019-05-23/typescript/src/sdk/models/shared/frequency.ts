import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FrequencyUnitsEnum } from "./frequencyunitsenum";



// Frequency
/** 
 * Object that describes the frequency.
**/
export class Frequency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=units" })
  units: FrequencyUnitsEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}
