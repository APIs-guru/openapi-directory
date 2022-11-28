import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssessmentTemplateFilter } from "./assessmenttemplatefilter";



export class ListAssessmentTemplatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentTargetArns" })
  assessmentTargetArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: AssessmentTemplateFilter;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
