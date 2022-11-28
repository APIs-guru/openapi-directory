import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AngleUnitsEnum } from "./angleunitsenum";



// Elevation
/** 
 * Elevation angle of the satellite in the sky during a contact.
**/
export class Elevation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit: AngleUnitsEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}
