import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Assessment } from "./assessment";


export class UpdateAssessmentStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessment" })
  assessment?: Assessment;
}
