import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Assessment } from "./assessment";



export class UpdateAssessmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessment" })
  assessment?: Assessment;
}
