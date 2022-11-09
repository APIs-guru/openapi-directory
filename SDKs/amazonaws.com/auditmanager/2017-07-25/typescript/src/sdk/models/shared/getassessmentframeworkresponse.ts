import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Framework } from "./framework";


export class GetAssessmentFrameworkResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=framework" })
  framework?: Framework;
}
