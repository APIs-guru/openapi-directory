import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RevisionInfo } from "./revisioninfo";


// BatchGetApplicationRevisionsOutput
/** 
 * Represents the output of a <code>BatchGetApplicationRevisions</code> operation.
**/
export class BatchGetApplicationRevisionsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationName" })
  applicationName?: string;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=revisions", elemType: shared.RevisionInfo })
  revisions?: RevisionInfo[];
}
