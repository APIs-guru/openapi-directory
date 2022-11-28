import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=contentConflict" })
  contentConflict?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fileModeConflict" })
  fileModeConflict?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fileModes" })
  fileModes?: FileModes;

  @SpeakeasyMetadata({ data: "json, name=filePath" })
  filePath?: string;

  @SpeakeasyMetadata({ data: "json, name=fileSizes" })
  fileSizes?: FileSizes;

  @SpeakeasyMetadata({ data: "json, name=isBinaryFile" })
  isBinaryFile?: IsBinaryFile;

  @SpeakeasyMetadata({ data: "json, name=mergeOperations" })
  mergeOperations?: MergeOperations;

  @SpeakeasyMetadata({ data: "json, name=numberOfConflicts" })
  numberOfConflicts?: number;

  @SpeakeasyMetadata({ data: "json, name=objectTypeConflict" })
  objectTypeConflict?: boolean;

  @SpeakeasyMetadata({ data: "json, name=objectTypes" })
  objectTypes?: ObjectTypes;
}
