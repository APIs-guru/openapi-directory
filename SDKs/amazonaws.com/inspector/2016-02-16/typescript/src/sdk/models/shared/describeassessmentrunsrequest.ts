import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeAssessmentRunsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentRunArns" })
  assessmentRunArns: string[];
}
