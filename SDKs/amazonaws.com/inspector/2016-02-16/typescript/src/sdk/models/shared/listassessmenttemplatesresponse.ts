import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListAssessmentTemplatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentTemplateArns" })
  assessmentTemplateArns: string[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
