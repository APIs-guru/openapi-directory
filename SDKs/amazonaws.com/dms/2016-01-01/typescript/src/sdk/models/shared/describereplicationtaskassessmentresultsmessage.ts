import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeReplicationTaskAssessmentResultsMessage
/** 
 * <p/>
**/
export class DescribeReplicationTaskAssessmentResultsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxRecords" })
  maxRecords?: number;

  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskArn" })
  replicationTaskArn?: string;
}
