import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssessmentFrameworkMetadata } from "./assessmentframeworkmetadata";


export class ListAssessmentFrameworksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=frameworkMetadataList", elemType: shared.AssessmentFrameworkMetadata })
  frameworkMetadataList?: AssessmentFrameworkMetadata[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
