import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AngleUnitsEnum } from "./angleunitsenum";


// Elevation
/** 
 * Elevation angle of the satellite in the sky during a contact.
**/
export class Elevation extends SpeakeasyBase {
  @Metadata({ data: "json, name=unit" })
  unit: AngleUnitsEnum;

  @Metadata({ data: "json, name=value" })
  value: number;
}
