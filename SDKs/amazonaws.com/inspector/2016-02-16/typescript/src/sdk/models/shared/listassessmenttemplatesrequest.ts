import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssessmentTemplateFilter } from "./assessmenttemplatefilter";


export class ListAssessmentTemplatesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentTargetArns" })
  assessmentTargetArns?: string[];

  @Metadata({ data: "json, name=filter" })
  filter?: AssessmentTemplateFilter;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
