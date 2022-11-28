import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssessmentMetadataItem } from "./assessmentmetadataitem";



export class ListAssessmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentMetadata", elemType: AssessmentMetadataItem })
  assessmentMetadata?: AssessmentMetadataItem[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
