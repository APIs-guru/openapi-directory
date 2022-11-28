import { SpeakeasyBase } from "../../../internal/utils";
import { FileModeTypeEnumEnum } from "./filemodetypeenumenum";
/**
 * Information about the file mode changes.
**/
export declare class SetFileModeEntry extends SpeakeasyBase {
    fileMode: FileModeTypeEnumEnum;
    filePath: string;
}
