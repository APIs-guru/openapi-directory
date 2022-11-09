import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeAssessmentRunsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentRunArns" })
  assessmentRunArns: string[];
}
