import { SpeakeasyBase } from "../../../internal/utils";
import { TableInput } from "./tableinput";
export declare class UpdateTableRequest extends SpeakeasyBase {
    catalogId?: string;
    databaseName: string;
    skipArchive?: boolean;
    tableInput: TableInput;
}
