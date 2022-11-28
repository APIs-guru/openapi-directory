import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationTaskAssessmentRun } from "./replicationtaskassessmentrun";



// StartReplicationTaskAssessmentRunResponse
/** 
 * <p/>
**/
export class StartReplicationTaskAssessmentRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskAssessmentRun" })
  replicationTaskAssessmentRun?: ReplicationTaskAssessmentRun;
}
