import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RevisionLocation } from "./revisionlocation";



// ListApplicationRevisionsOutput
/** 
 * Represents the output of a <code>ListApplicationRevisions</code> operation.
**/
export class ListApplicationRevisionsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=revisions", elemType: RevisionLocation })
  revisions?: RevisionLocation[];
}
