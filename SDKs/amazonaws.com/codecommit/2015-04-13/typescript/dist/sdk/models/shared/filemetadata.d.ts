import { SpeakeasyBase } from "../../../internal/utils";
import { FileModeTypeEnumEnum } from "./filemodetypeenumenum";
/**
 * A file to be added, updated, or deleted as part of a commit.
**/
export declare class FileMetadata extends SpeakeasyBase {
    absolutePath?: string;
    blobId?: string;
    fileMode?: FileModeTypeEnumEnum;
}
