import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReplicationTaskAssessmentResult } from "./replicationtaskassessmentresult";


// DescribeReplicationTaskAssessmentResultsResponse
/** 
 * <p/>
**/
export class DescribeReplicationTaskAssessmentResultsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=BucketName" })
  bucketName?: string;

  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=ReplicationTaskAssessmentResults", elemType: shared.ReplicationTaskAssessmentResult })
  replicationTaskAssessmentResults?: ReplicationTaskAssessmentResult[];
}
