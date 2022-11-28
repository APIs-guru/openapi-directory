import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssessmentFrameworkMetadata } from "./assessmentframeworkmetadata";



export class ListAssessmentFrameworksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=frameworkMetadataList", elemType: AssessmentFrameworkMetadata })
  frameworkMetadataList?: AssessmentFrameworkMetadata[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
