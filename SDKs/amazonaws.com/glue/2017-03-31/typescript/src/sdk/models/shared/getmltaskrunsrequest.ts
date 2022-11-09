import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TaskRunFilterCriteria } from "./taskrunfiltercriteria";
import { TaskRunSortCriteria } from "./taskrunsortcriteria";


export class GetMlTaskRunsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filter" })
  filter?: TaskRunFilterCriteria;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Sort" })
  sort?: TaskRunSortCriteria;

  @Metadata({ data: "json, name=TransformId" })
  transformId: string;
}
