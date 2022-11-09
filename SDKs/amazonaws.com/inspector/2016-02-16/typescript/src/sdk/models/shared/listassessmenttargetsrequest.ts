import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssessmentTargetFilter } from "./assessmenttargetfilter";


export class ListAssessmentTargetsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: AssessmentTargetFilter;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
