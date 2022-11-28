import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains metadata information for a database in a data catalog.
**/
export declare class Database extends SpeakeasyBase {
    description?: string;
    name: string;
    parameters?: Map<string, string>;
}
