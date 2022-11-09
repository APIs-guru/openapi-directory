import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeleteFileEntry } from "./deletefileentry";
import { ReplaceContentEntry } from "./replacecontententry";
import { SetFileModeEntry } from "./setfilemodeentry";


// ConflictResolution
/** 
 * If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge.
**/
export class ConflictResolution extends SpeakeasyBase {
  @Metadata({ data: "json, name=deleteFiles", elemType: shared.DeleteFileEntry })
  deleteFiles?: DeleteFileEntry[];

  @Metadata({ data: "json, name=replaceContents", elemType: shared.ReplaceContentEntry })
  replaceContents?: ReplaceContentEntry[];

  @Metadata({ data: "json, name=setFileModes", elemType: shared.SetFileModeEntry })
  setFileModes?: SetFileModeEntry[];
}
