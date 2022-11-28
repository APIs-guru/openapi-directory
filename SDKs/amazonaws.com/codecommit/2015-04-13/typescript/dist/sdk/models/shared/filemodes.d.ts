import { SpeakeasyBase } from "../../../internal/utils";
import { FileModeTypeEnumEnum } from "./filemodetypeenumenum";
/**
 * Information about file modes in a merge or pull request.
**/
export declare class FileModes extends SpeakeasyBase {
    base?: FileModeTypeEnumEnum;
    destination?: FileModeTypeEnumEnum;
    source?: FileModeTypeEnumEnum;
}
