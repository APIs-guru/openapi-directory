import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// JobBookmarkEntry
/** 
 * Defines a point that a job can resume processing.
**/
export class JobBookmarkEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attempt" })
  attempt?: number;

  @SpeakeasyMetadata({ data: "json, name=JobBookmark" })
  jobBookmark?: string;

  @SpeakeasyMetadata({ data: "json, name=JobName" })
  jobName?: string;

  @SpeakeasyMetadata({ data: "json, name=PreviousRunId" })
  previousRunId?: string;

  @SpeakeasyMetadata({ data: "json, name=Run" })
  run?: number;

  @SpeakeasyMetadata({ data: "json, name=RunId" })
  runId?: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: number;
}
