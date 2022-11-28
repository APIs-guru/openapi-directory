import { SpeakeasyBase } from "../../../internal/utils";
import { Database } from "./database";
export declare class ListDatabasesOutput extends SpeakeasyBase {
    databaseList?: Database[];
    nextToken?: string;
}
