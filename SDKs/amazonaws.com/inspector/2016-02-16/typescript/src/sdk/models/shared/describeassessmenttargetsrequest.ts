import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeAssessmentTargetsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentTargetArns" })
  assessmentTargetArns: string[];
}
