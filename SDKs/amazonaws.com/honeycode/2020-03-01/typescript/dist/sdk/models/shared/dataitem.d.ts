import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FormatEnum } from "./formatenum";
/**
 * The data in a particular data cell defined on the screen.
**/
export declare class DataItem extends SpeakeasyBase {
    formattedValue?: string;
    overrideFormat?: FormatEnum;
    rawValue?: string;
}
