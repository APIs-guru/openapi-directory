import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The database and table in the Glue Data Catalog that is used for input or output data.
**/
export declare class GlueTable extends SpeakeasyBase {
    catalogId?: string;
    connectionName?: string;
    databaseName: string;
    tableName: string;
}
