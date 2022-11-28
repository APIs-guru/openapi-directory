import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Framework } from "./framework";



export class CreateAssessmentFrameworkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=framework" })
  framework?: Framework;
}
