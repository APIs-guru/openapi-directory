import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssessmentReportDestinationTypeEnum } from "./assessmentreportdestinationtypeenum";



// AssessmentReportsDestination
/** 
 *  The location in which Audit Manager saves assessment reports for the given assessment. 
**/
export class AssessmentReportsDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationType" })
  destinationType?: AssessmentReportDestinationTypeEnum;
}
