import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReplicationTaskAssessmentResult
/** 
 *  The task assessment report in JSON format. 
**/
export class ReplicationTaskAssessmentResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssessmentResults" })
  assessmentResults?: string;

  @Metadata({ data: "json, name=AssessmentResultsFile" })
  assessmentResultsFile?: string;

  @Metadata({ data: "json, name=AssessmentStatus" })
  assessmentStatus?: string;

  @Metadata({ data: "json, name=ReplicationTaskArn" })
  replicationTaskArn?: string;

  @Metadata({ data: "json, name=ReplicationTaskIdentifier" })
  replicationTaskIdentifier?: string;

  @Metadata({ data: "json, name=ReplicationTaskLastAssessmentDate" })
  replicationTaskLastAssessmentDate?: Date;

  @Metadata({ data: "json, name=S3ObjectUrl" })
  s3ObjectUrl?: string;
}
