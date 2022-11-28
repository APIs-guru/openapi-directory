import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Assessment } from "./assessment";



export class UpdateAssessmentStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessment" })
  assessment?: Assessment;
}
