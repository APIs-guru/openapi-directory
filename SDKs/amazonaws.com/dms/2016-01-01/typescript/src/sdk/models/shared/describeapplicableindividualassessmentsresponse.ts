import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeApplicableIndividualAssessmentsResponse
/** 
 * <p/>
**/
export class DescribeApplicableIndividualAssessmentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=IndividualAssessmentNames" })
  individualAssessmentNames?: string[];

  @Metadata({ data: "json, name=Marker" })
  marker?: string;
}
