import { SpeakeasyBase } from "../../../internal/utils/utils";
import { UpsertActionEnum } from "./upsertactionenum";
/**
 *  An object that represents the result of a single upsert row request.
**/
export declare class UpsertRowsResult extends SpeakeasyBase {
    rowIds: string[];
    upsertAction: UpsertActionEnum;
}
