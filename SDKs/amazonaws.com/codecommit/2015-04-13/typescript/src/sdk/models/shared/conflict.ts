import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConflictMetadata } from "./conflictmetadata";
import { MergeHunk } from "./mergehunk";


// Conflict
/** 
 * Information about conflicts in a merge operation.
**/
export class Conflict extends SpeakeasyBase {
  @Metadata({ data: "json, name=conflictMetadata" })
  conflictMetadata?: ConflictMetadata;

  @Metadata({ data: "json, name=mergeHunks", elemType: shared.MergeHunk })
  mergeHunks?: MergeHunk[];
}
