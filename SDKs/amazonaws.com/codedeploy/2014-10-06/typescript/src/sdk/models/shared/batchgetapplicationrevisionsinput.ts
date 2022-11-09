import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RevisionLocation } from "./revisionlocation";


// BatchGetApplicationRevisionsInput
/** 
 * Represents the input of a <code>BatchGetApplicationRevisions</code> operation.
**/
export class BatchGetApplicationRevisionsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=revisions", elemType: shared.RevisionLocation })
  revisions: RevisionLocation[];
}
