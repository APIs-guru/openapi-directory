import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Framework } from "./framework";



export class GetAssessmentFrameworkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=framework" })
  framework?: Framework;
}
