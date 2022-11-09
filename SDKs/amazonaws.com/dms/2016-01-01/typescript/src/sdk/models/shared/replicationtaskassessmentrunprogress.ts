import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReplicationTaskAssessmentRunProgress
/** 
 * The progress values reported by the <code>AssessmentProgress</code> response element.
**/
export class ReplicationTaskAssessmentRunProgress extends SpeakeasyBase {
  @Metadata({ data: "json, name=IndividualAssessmentCompletedCount" })
  individualAssessmentCompletedCount?: number;

  @Metadata({ data: "json, name=IndividualAssessmentCount" })
  individualAssessmentCount?: number;
}
