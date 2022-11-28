import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssessmentRunFilter } from "./assessmentrunfilter";



export class ListAssessmentRunsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentTemplateArns" })
  assessmentTemplateArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: AssessmentRunFilter;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
