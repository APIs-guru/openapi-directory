import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationTaskAssessmentRun } from "./replicationtaskassessmentrun";



// DescribeReplicationTaskAssessmentRunsResponse
/** 
 * <p/>
**/
export class DescribeReplicationTaskAssessmentRunsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskAssessmentRuns", elemType: ReplicationTaskAssessmentRun })
  replicationTaskAssessmentRuns?: ReplicationTaskAssessmentRun[];
}
