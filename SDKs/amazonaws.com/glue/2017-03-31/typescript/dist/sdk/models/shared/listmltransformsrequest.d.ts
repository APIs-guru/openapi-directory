import { SpeakeasyBase } from "../../../internal/utils";
import { TransformFilterCriteria } from "./transformfiltercriteria";
import { TransformSortCriteria } from "./transformsortcriteria";
export declare class ListMlTransformsRequest extends SpeakeasyBase {
    filter?: TransformFilterCriteria;
    maxResults?: number;
    nextToken?: string;
    sort?: TransformSortCriteria;
    tags?: Map<string, string>;
}
