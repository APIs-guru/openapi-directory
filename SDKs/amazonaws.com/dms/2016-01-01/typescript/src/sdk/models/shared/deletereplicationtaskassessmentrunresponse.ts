import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationTaskAssessmentRun } from "./replicationtaskassessmentrun";



// DeleteReplicationTaskAssessmentRunResponse
/** 
 * <p/>
**/
export class DeleteReplicationTaskAssessmentRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskAssessmentRun" })
  replicationTaskAssessmentRun?: ReplicationTaskAssessmentRun;
}
