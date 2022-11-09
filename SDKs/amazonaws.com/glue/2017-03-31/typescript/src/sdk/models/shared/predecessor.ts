import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Predecessor
/** 
 * A job run that was used in the predicate of a conditional trigger that triggered this job run.
**/
export class Predecessor extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobName" })
  jobName?: string;

  @Metadata({ data: "json, name=RunId" })
  runId?: string;
}
