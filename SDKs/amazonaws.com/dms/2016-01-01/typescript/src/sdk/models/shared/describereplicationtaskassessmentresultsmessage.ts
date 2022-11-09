import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeReplicationTaskAssessmentResultsMessage
/** 
 * <p/>
**/
export class DescribeReplicationTaskAssessmentResultsMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=MaxRecords" })
  maxRecords?: number;

  @Metadata({ data: "json, name=ReplicationTaskArn" })
  replicationTaskArn?: string;
}
