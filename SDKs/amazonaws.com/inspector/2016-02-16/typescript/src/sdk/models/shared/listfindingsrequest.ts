import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FindingFilter } from "./findingfilter";



export class ListFindingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentRunArns" })
  assessmentRunArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: FindingFilter;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
