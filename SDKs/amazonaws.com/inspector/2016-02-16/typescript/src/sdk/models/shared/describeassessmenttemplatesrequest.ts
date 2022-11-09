import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeAssessmentTemplatesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentTemplateArns" })
  assessmentTemplateArns: string[];
}
