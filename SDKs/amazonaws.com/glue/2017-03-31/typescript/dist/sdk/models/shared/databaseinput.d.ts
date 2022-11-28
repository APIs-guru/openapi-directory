import { SpeakeasyBase } from "../../../internal/utils";
import { PrincipalPermissions } from "./principalpermissions";
import { DatabaseIdentifier } from "./databaseidentifier";
/**
 * The structure used to create or update a database.
**/
export declare class DatabaseInput extends SpeakeasyBase {
    createTableDefaultPermissions?: PrincipalPermissions[];
    description?: string;
    locationUri?: string;
    name: string;
    parameters?: Map<string, string>;
    targetDatabase?: DatabaseIdentifier;
}
