import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FindMatchesTaskRunProperties
/** 
 * Specifies configuration properties for a Find Matches task run.
**/
export class FindMatchesTaskRunProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=JobName" })
  jobName?: string;

  @SpeakeasyMetadata({ data: "json, name=JobRunId" })
  jobRunId?: string;
}
