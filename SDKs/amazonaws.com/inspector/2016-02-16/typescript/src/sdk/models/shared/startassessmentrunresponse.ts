import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartAssessmentRunResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentRunArn" })
  assessmentRunArn: string;
}
