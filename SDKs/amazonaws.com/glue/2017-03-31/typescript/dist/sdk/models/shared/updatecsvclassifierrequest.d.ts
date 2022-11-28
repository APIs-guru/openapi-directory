import { SpeakeasyBase } from "../../../internal/utils";
import { CsvHeaderOptionEnum } from "./csvheaderoptionenum";
/**
 * Specifies a custom CSV classifier to be updated.
**/
export declare class UpdateCsvClassifierRequest extends SpeakeasyBase {
    allowSingleColumn?: boolean;
    containsHeader?: CsvHeaderOptionEnum;
    delimiter?: string;
    disableValueTrimming?: boolean;
    header?: string[];
    name: string;
    quoteSymbol?: string;
}
