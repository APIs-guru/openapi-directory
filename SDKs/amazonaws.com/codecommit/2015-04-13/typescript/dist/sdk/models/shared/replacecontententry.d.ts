import { SpeakeasyBase } from "../../../internal/utils";
import { FileModeTypeEnumEnum } from "./filemodetypeenumenum";
import { ReplacementTypeEnumEnum } from "./replacementtypeenumenum";
/**
 * Information about a replacement content entry in the conflict of a merge or pull request operation.
**/
export declare class ReplaceContentEntry extends SpeakeasyBase {
    content?: string;
    fileMode?: FileModeTypeEnumEnum;
    filePath: string;
    replacementType: ReplacementTypeEnumEnum;
}
