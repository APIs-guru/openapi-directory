import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StopActionEnum } from "./stopactionenum";


export class StopAssessmentRunRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentRunArn" })
  assessmentRunArn: string;

  @Metadata({ data: "json, name=stopAction" })
  stopAction?: StopActionEnum;
}
