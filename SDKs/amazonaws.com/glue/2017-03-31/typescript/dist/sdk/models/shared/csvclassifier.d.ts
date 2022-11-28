import { SpeakeasyBase } from "../../../internal/utils";
import { CsvHeaderOptionEnum } from "./csvheaderoptionenum";
/**
 * A classifier for custom <code>CSV</code> content.
**/
export declare class CsvClassifier extends SpeakeasyBase {
    allowSingleColumn?: boolean;
    containsHeader?: CsvHeaderOptionEnum;
    creationTime?: Date;
    delimiter?: string;
    disableValueTrimming?: boolean;
    header?: string[];
    lastUpdated?: Date;
    name: string;
    quoteSymbol?: string;
    version?: number;
}
