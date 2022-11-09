import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FindMatchesTaskRunProperties
/** 
 * Specifies configuration properties for a Find Matches task run.
**/
export class FindMatchesTaskRunProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobId" })
  jobId?: string;

  @Metadata({ data: "json, name=JobName" })
  jobName?: string;

  @Metadata({ data: "json, name=JobRunId" })
  jobRunId?: string;
}
