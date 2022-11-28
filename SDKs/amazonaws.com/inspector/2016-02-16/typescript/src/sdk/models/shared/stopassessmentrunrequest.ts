import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StopActionEnum } from "./stopactionenum";



export class StopAssessmentRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentRunArn" })
  assessmentRunArn: string;

  @SpeakeasyMetadata({ data: "json, name=stopAction" })
  stopAction?: StopActionEnum;
}
