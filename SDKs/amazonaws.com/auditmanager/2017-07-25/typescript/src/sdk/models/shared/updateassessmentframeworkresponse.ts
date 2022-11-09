import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Framework } from "./framework";


export class UpdateAssessmentFrameworkResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=framework" })
  framework?: Framework;
}
