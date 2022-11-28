import { SpeakeasyBase } from "../../../internal/utils";
import { Replica } from "./replica";
/**
 * Represents the properties of a global table.
**/
export declare class GlobalTable extends SpeakeasyBase {
    globalTableName?: string;
    replicationGroup?: Replica[];
}
