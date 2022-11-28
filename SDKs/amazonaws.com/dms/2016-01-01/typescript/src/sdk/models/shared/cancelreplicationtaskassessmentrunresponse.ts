import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationTaskAssessmentRun } from "./replicationtaskassessmentrun";



// CancelReplicationTaskAssessmentRunResponse
/** 
 * <p/>
**/
export class CancelReplicationTaskAssessmentRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskAssessmentRun" })
  replicationTaskAssessmentRun?: ReplicationTaskAssessmentRun;
}
