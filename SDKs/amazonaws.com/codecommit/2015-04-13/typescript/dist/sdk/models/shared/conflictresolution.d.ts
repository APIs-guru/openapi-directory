import { SpeakeasyBase } from "../../../internal/utils";
import { DeleteFileEntry } from "./deletefileentry";
import { ReplaceContentEntry } from "./replacecontententry";
import { SetFileModeEntry } from "./setfilemodeentry";
/**
 * If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge.
**/
export declare class ConflictResolution extends SpeakeasyBase {
    deleteFiles?: DeleteFileEntry[];
    replaceContents?: ReplaceContentEntry[];
    setFileModes?: SetFileModeEntry[];
}
