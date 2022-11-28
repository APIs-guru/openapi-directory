import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeAssessmentTargetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentTargetArns" })
  assessmentTargetArns: string[];
}
