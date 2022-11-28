import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeApplicableIndividualAssessmentsResponse
/** 
 * <p/>
**/
export class DescribeApplicableIndividualAssessmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IndividualAssessmentNames" })
  individualAssessmentNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;
}
