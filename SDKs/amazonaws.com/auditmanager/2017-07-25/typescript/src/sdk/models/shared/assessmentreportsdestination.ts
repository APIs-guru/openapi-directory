import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssessmentReportDestinationTypeEnum } from "./assessmentreportdestinationtypeenum";


// AssessmentReportsDestination
/** 
 *  The location in which Audit Manager saves assessment reports for the given assessment. 
**/
export class AssessmentReportsDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination" })
  destination?: string;

  @Metadata({ data: "json, name=destinationType" })
  destinationType?: AssessmentReportDestinationTypeEnum;
}
