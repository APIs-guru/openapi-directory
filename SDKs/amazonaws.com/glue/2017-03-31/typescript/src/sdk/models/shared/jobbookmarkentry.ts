import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// JobBookmarkEntry
/** 
 * Defines a point that a job can resume processing.
**/
export class JobBookmarkEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attempt" })
  attempt?: number;

  @Metadata({ data: "json, name=JobBookmark" })
  jobBookmark?: string;

  @Metadata({ data: "json, name=JobName" })
  jobName?: string;

  @Metadata({ data: "json, name=PreviousRunId" })
  previousRunId?: string;

  @Metadata({ data: "json, name=Run" })
  run?: number;

  @Metadata({ data: "json, name=RunId" })
  runId?: string;

  @Metadata({ data: "json, name=Version" })
  version?: number;
}
