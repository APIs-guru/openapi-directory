import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReplicationTaskAssessmentResult
/** 
 *  The task assessment report in JSON format. 
**/
export class ReplicationTaskAssessmentResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssessmentResults" })
  assessmentResults?: string;

  @SpeakeasyMetadata({ data: "json, name=AssessmentResultsFile" })
  assessmentResultsFile?: string;

  @SpeakeasyMetadata({ data: "json, name=AssessmentStatus" })
  assessmentStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskArn" })
  replicationTaskArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskIdentifier" })
  replicationTaskIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskLastAssessmentDate" })
  replicationTaskLastAssessmentDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=S3ObjectUrl" })
  s3ObjectUrl?: string;
}
