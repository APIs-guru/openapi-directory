import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssessmentTargetFilter } from "./assessmenttargetfilter";



export class ListAssessmentTargetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: AssessmentTargetFilter;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
