import { SpeakeasyBase } from "../../../internal/utils";
import { FileModeTypeEnumEnum } from "./filemodetypeenumenum";
/**
 * Returns information about a symbolic link in a repository folder.
**/
export declare class SymbolicLink extends SpeakeasyBase {
    absolutePath?: string;
    blobId?: string;
    fileMode?: FileModeTypeEnumEnum;
    relativePath?: string;
}
