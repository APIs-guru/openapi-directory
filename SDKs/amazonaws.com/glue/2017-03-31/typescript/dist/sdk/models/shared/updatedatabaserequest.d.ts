import { SpeakeasyBase } from "../../../internal/utils";
import { DatabaseInput } from "./databaseinput";
export declare class UpdateDatabaseRequest extends SpeakeasyBase {
    catalogId?: string;
    databaseInput: DatabaseInput;
    name: string;
}
