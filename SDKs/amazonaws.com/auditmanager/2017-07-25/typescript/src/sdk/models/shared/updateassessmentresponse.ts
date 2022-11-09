import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Assessment } from "./assessment";


export class UpdateAssessmentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessment" })
  assessment?: Assessment;
}
