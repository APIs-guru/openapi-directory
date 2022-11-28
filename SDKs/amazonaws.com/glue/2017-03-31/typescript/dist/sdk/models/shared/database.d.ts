import { SpeakeasyBase } from "../../../internal/utils";
import { PrincipalPermissions } from "./principalpermissions";
import { DatabaseIdentifier } from "./databaseidentifier";
/**
 * The <code>Database</code> object represents a logical grouping of tables that might reside in a Hive metastore or an RDBMS.
**/
export declare class Database extends SpeakeasyBase {
    catalogId?: string;
    createTableDefaultPermissions?: PrincipalPermissions[];
    createTime?: Date;
    description?: string;
    locationUri?: string;
    name: string;
    parameters?: Map<string, string>;
    targetDatabase?: DatabaseIdentifier;
}
