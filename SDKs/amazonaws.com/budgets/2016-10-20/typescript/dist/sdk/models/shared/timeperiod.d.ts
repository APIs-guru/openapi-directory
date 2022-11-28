import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The period of time that is covered by a budget. The period has a start date and an end date. The start date must come before the end date. There are no restrictions on the end date.
**/
export declare class TimePeriod extends SpeakeasyBase {
    end?: Date;
    start?: Date;
}
