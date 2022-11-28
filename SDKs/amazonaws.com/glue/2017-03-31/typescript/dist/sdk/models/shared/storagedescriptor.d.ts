import { SpeakeasyBase } from "../../../internal/utils";
import { Column } from "./column";
import { SchemaReference } from "./schemareference";
import { SerDeInfo } from "./serdeinfo";
import { SkewedInfo } from "./skewedinfo";
import { Order } from "./order";
/**
 * Describes the physical storage of table data.
**/
export declare class StorageDescriptor extends SpeakeasyBase {
    bucketColumns?: string[];
    columns?: Column[];
    compressed?: boolean;
    inputFormat?: string;
    location?: string;
    numberOfBuckets?: number;
    outputFormat?: string;
    parameters?: Map<string, string>;
    schemaReference?: SchemaReference;
    serdeInfo?: SerDeInfo;
    skewedInfo?: SkewedInfo;
    sortColumns?: Order[];
    storedAsSubDirectories?: boolean;
}
