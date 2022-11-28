import { SpeakeasyBase } from "../../../internal/utils";
import { FileModeTypeEnumEnum } from "./filemodetypeenumenum";
import { SourceFileSpecifier } from "./sourcefilespecifier";
/**
 * Information about a file added or updated as part of a commit.
**/
export declare class PutFileEntry extends SpeakeasyBase {
    fileContent?: string;
    fileMode?: FileModeTypeEnumEnum;
    filePath: string;
    sourceFile?: SourceFileSpecifier;
}
