import { SpeakeasyBase } from "../../../internal/utils";
import { IndexFieldStatus } from "./indexfieldstatus";
/**
 * The result of a <code><a>DefineIndexField</a></code> request. Contains the status of the newly-configured index field.
**/
export declare class DefineIndexFieldResponse extends SpeakeasyBase {
    indexField: IndexFieldStatus;
}
