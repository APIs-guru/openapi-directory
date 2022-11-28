import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConflictMetadata } from "./conflictmetadata";
import { MergeHunk } from "./mergehunk";



// Conflict
/** 
 * Information about conflicts in a merge operation.
**/
export class Conflict extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conflictMetadata" })
  conflictMetadata?: ConflictMetadata;

  @SpeakeasyMetadata({ data: "json, name=mergeHunks", elemType: MergeHunk })
  mergeHunks?: MergeHunk[];
}
