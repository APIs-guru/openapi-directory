import { SpeakeasyBase } from "../../../internal/utils";
import { TaskRunFilterCriteria } from "./taskrunfiltercriteria";
import { TaskRunSortCriteria } from "./taskrunsortcriteria";
export declare class GetMlTaskRunsRequest extends SpeakeasyBase {
    filter?: TaskRunFilterCriteria;
    maxResults?: number;
    nextToken?: string;
    sort?: TaskRunSortCriteria;
    transformId: string;
}
