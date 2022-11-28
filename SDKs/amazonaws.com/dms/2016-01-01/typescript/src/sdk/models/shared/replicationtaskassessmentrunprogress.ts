import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReplicationTaskAssessmentRunProgress
/** 
 * The progress values reported by the <code>AssessmentProgress</code> response element.
**/
export class ReplicationTaskAssessmentRunProgress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IndividualAssessmentCompletedCount" })
  individualAssessmentCompletedCount?: number;

  @SpeakeasyMetadata({ data: "json, name=IndividualAssessmentCount" })
  individualAssessmentCount?: number;
}
