import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationTaskAssessmentResult } from "./replicationtaskassessmentresult";



// DescribeReplicationTaskAssessmentResultsResponse
/** 
 * <p/>
**/
export class DescribeReplicationTaskAssessmentResultsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BucketName" })
  bucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskAssessmentResults", elemType: ReplicationTaskAssessmentResult })
  replicationTaskAssessmentResults?: ReplicationTaskAssessmentResult[];
}
