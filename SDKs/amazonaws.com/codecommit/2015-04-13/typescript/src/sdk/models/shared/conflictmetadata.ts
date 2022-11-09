import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FileModes } from "./filemodes";
import { FileSizes } from "./filesizes";
import { IsBinaryFile } from "./isbinaryfile";
import { MergeOperations } from "./mergeoperations";
import { ObjectTypes } from "./objecttypes";


// ConflictMetadata
/** 
 * Information about the metadata for a conflict in a merge operation.
**/
export class ConflictMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentConflict" })
  contentConflict?: boolean;

  @Metadata({ data: "json, name=fileModeConflict" })
  fileModeConflict?: boolean;

  @Metadata({ data: "json, name=fileModes" })
  fileModes?: FileModes;

  @Metadata({ data: "json, name=filePath" })
  filePath?: string;

  @Metadata({ data: "json, name=fileSizes" })
  fileSizes?: FileSizes;

  @Metadata({ data: "json, name=isBinaryFile" })
  isBinaryFile?: IsBinaryFile;

  @Metadata({ data: "json, name=mergeOperations" })
  mergeOperations?: MergeOperations;

  @Metadata({ data: "json, name=numberOfConflicts" })
  numberOfConflicts?: number;

  @Metadata({ data: "json, name=objectTypeConflict" })
  objectTypeConflict?: boolean;

  @Metadata({ data: "json, name=objectTypes" })
  objectTypes?: ObjectTypes;
}
