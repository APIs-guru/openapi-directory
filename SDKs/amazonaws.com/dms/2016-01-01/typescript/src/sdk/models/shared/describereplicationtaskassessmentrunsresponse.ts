import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReplicationTaskAssessmentRun } from "./replicationtaskassessmentrun";


// DescribeReplicationTaskAssessmentRunsResponse
/** 
 * <p/>
**/
export class DescribeReplicationTaskAssessmentRunsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=ReplicationTaskAssessmentRuns", elemType: shared.ReplicationTaskAssessmentRun })
  replicationTaskAssessmentRuns?: ReplicationTaskAssessmentRun[];
}
