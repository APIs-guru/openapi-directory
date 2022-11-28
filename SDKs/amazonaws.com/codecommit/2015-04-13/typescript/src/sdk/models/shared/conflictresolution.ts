import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeleteFileEntry } from "./deletefileentry";
import { ReplaceContentEntry } from "./replacecontententry";
import { SetFileModeEntry } from "./setfilemodeentry";



// ConflictResolution
/** 
 * If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge.
**/
export class ConflictResolution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deleteFiles", elemType: DeleteFileEntry })
  deleteFiles?: DeleteFileEntry[];

  @SpeakeasyMetadata({ data: "json, name=replaceContents", elemType: ReplaceContentEntry })
  replaceContents?: ReplaceContentEntry[];

  @SpeakeasyMetadata({ data: "json, name=setFileModes", elemType: SetFileModeEntry })
  setFileModes?: SetFileModeEntry[];
}
