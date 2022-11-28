import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartAssessmentRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentRunArn" })
  assessmentRunArn: string;
}
