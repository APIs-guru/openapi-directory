import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EirpUnitsEnum } from "./eirpunitsenum";



// Eirp
/** 
 * Object that represents EIRP.
**/
export class Eirp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=units" })
  units: EirpUnitsEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}
