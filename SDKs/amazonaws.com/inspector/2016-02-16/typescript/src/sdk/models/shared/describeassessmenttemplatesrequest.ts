import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeAssessmentTemplatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentTemplateArns" })
  assessmentTemplateArns: string[];
}
