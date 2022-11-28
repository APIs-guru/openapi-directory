import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RevisionInfo } from "./revisioninfo";



// BatchGetApplicationRevisionsOutput
/** 
 * Represents the output of a <code>BatchGetApplicationRevisions</code> operation.
**/
export class BatchGetApplicationRevisionsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationName" })
  applicationName?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=revisions", elemType: RevisionInfo })
  revisions?: RevisionInfo[];
}
