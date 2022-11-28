import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnNullableEnum } from "./columnnullableenum";
/**
 * Information about the columns in a query execution result.
**/
export declare class ColumnInfo extends SpeakeasyBase {
    caseSensitive?: boolean;
    catalogName?: string;
    label?: string;
    name: string;
    nullable?: ColumnNullableEnum;
    precision?: number;
    scale?: number;
    schemaName?: string;
    tableName?: string;
    type: string;
}
