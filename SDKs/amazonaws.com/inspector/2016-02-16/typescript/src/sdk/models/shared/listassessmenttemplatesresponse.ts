import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListAssessmentTemplatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentTemplateArns" })
  assessmentTemplateArns: string[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
