import { SpeakeasyBase } from "../../../internal/utils";
import { FileModeTypeEnumEnum } from "./filemodetypeenumenum";
/**
 * Returns information about a file in a repository.
**/
export declare class File extends SpeakeasyBase {
    absolutePath?: string;
    blobId?: string;
    fileMode?: FileModeTypeEnumEnum;
    relativePath?: string;
}
