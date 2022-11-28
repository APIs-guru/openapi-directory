import { SpeakeasyBase } from "../../../internal/utils";
import { DatabaseInput } from "./databaseinput";
export declare class CreateDatabaseRequest extends SpeakeasyBase {
    catalogId?: string;
    databaseInput: DatabaseInput;
}
