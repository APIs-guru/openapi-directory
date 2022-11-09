import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FindingFilter } from "./findingfilter";


export class ListFindingsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentRunArns" })
  assessmentRunArns?: string[];

  @Metadata({ data: "json, name=filter" })
  filter?: FindingFilter;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
