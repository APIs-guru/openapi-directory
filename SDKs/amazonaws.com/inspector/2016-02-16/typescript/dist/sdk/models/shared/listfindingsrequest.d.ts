import { SpeakeasyBase } from "../../../internal/utils";
import { FindingFilter } from "./findingfilter";
export declare class ListFindingsRequest extends SpeakeasyBase {
    assessmentRunArns?: string[];
    filter?: FindingFilter;
    maxResults?: number;
    nextToken?: string;
}
