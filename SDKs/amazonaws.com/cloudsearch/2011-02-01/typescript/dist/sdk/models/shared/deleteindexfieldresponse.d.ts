import { SpeakeasyBase } from "../../../internal/utils";
import { IndexFieldStatus } from "./indexfieldstatus";
/**
 * A response message that contains the status of a deleted index field.
**/
export declare class DeleteIndexFieldResponse extends SpeakeasyBase {
    indexField: IndexFieldStatus;
}
