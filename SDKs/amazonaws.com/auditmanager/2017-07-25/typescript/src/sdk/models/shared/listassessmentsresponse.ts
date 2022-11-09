import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssessmentMetadataItem } from "./assessmentmetadataitem";


export class ListAssessmentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentMetadata", elemType: shared.AssessmentMetadataItem })
  assessmentMetadata?: AssessmentMetadataItem[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
