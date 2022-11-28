import { SpeakeasyBase } from "../../../internal/utils";
import { DurationUnitEnum } from "./durationunitenum";
/**
 * An object that represents a duration of time.
**/
export declare class Duration extends SpeakeasyBase {
    unit?: DurationUnitEnum;
    value?: number;
}
