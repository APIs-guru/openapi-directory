import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RevisionLocation } from "./revisionlocation";


// ListApplicationRevisionsOutput
/** 
 * Represents the output of a <code>ListApplicationRevisions</code> operation.
**/
export class ListApplicationRevisionsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=revisions", elemType: shared.RevisionLocation })
  revisions?: RevisionLocation[];
}
