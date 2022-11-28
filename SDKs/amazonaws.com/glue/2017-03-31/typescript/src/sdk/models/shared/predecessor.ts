import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Predecessor
/** 
 * A job run that was used in the predicate of a conditional trigger that triggered this job run.
**/
export class Predecessor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobName" })
  jobName?: string;

  @SpeakeasyMetadata({ data: "json, name=RunId" })
  runId?: string;
}
