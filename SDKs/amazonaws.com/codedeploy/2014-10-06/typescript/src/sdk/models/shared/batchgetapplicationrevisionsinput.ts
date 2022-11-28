import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RevisionLocation } from "./revisionlocation";



// BatchGetApplicationRevisionsInput
/** 
 * Represents the input of a <code>BatchGetApplicationRevisions</code> operation.
**/
export class BatchGetApplicationRevisionsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "json, name=revisions", elemType: RevisionLocation })
  revisions: RevisionLocation[];
}
