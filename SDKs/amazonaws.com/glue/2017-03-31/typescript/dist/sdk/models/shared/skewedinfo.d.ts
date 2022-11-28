import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies skewed values in a table. Skewed values are those that occur with very high frequency.
**/
export declare class SkewedInfo extends SpeakeasyBase {
    skewedColumnNames?: string[];
    skewedColumnValueLocationMaps?: Map<string, string>;
    skewedColumnValues?: string[];
}
