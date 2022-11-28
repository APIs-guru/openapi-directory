import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaskRunFilterCriteria } from "./taskrunfiltercriteria";
import { TaskRunSortCriteria } from "./taskrunsortcriteria";



export class GetMlTaskRunsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filter" })
  filter?: TaskRunFilterCriteria;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Sort" })
  sort?: TaskRunSortCriteria;

  @SpeakeasyMetadata({ data: "json, name=TransformId" })
  transformId: string;
}
