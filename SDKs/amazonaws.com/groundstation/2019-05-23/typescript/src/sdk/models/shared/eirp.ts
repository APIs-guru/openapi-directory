import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EirpUnitsEnum } from "./eirpunitsenum";


// Eirp
/** 
 * Object that represents EIRP.
**/
export class Eirp extends SpeakeasyBase {
  @Metadata({ data: "json, name=units" })
  units: EirpUnitsEnum;

  @Metadata({ data: "json, name=value" })
  value: number;
}
