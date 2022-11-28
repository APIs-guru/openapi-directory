import { SpeakeasyBase } from "../../../internal/utils";
import { ReleaseLabelFilter } from "./releaselabelfilter";
export declare class ListReleaseLabelsInput extends SpeakeasyBase {
    filters?: ReleaseLabelFilter;
    maxResults?: number;
    nextToken?: string;
}
