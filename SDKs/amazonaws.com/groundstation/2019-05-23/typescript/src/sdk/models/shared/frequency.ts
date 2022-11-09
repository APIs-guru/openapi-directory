import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FrequencyUnitsEnum } from "./frequencyunitsenum";


// Frequency
/** 
 * Object that describes the frequency.
**/
export class Frequency extends SpeakeasyBase {
  @Metadata({ data: "json, name=units" })
  units: FrequencyUnitsEnum;

  @Metadata({ data: "json, name=value" })
  value: number;
}
