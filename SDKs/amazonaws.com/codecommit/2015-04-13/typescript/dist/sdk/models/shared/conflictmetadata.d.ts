import { SpeakeasyBase } from "../../../internal/utils";
import { FileModes } from "./filemodes";
import { FileSizes } from "./filesizes";
import { IsBinaryFile } from "./isbinaryfile";
import { MergeOperations } from "./mergeoperations";
import { ObjectTypes } from "./objecttypes";
/**
 * Information about the metadata for a conflict in a merge operation.
**/
export declare class ConflictMetadata extends SpeakeasyBase {
    contentConflict?: boolean;
    fileModeConflict?: boolean;
    fileModes?: FileModes;
    filePath?: string;
    fileSizes?: FileSizes;
    isBinaryFile?: IsBinaryFile;
    mergeOperations?: MergeOperations;
    numberOfConflicts?: number;
    objectTypeConflict?: boolean;
    objectTypes?: ObjectTypes;
}
