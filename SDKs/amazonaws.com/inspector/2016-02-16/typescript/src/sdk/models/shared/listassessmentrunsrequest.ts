import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssessmentRunFilter } from "./assessmentrunfilter";


export class ListAssessmentRunsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentTemplateArns" })
  assessmentTemplateArns?: string[];

  @Metadata({ data: "json, name=filter" })
  filter?: AssessmentRunFilter;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
