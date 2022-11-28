import { SpeakeasyBase } from "../../../internal/utils";
import { ChangeTypeEnumEnum } from "./changetypeenumenum";
/**
 * Information about the file operation conflicts in a merge operation.
**/
export declare class MergeOperations extends SpeakeasyBase {
    destination?: ChangeTypeEnumEnum;
    source?: ChangeTypeEnumEnum;
}
