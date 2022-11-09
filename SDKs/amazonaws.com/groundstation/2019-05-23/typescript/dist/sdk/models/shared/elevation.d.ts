import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AngleUnitsEnum } from "./angleunitsenum";
/**
 * Elevation angle of the satellite in the sky during a contact.
**/
export declare class Elevation extends SpeakeasyBase {
    unit: AngleUnitsEnum;
    value: number;
}
