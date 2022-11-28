import { SpeakeasyBase } from "../../../internal/utils";
import { EntityRecognizerFilter } from "./entityrecognizerfilter";
export declare class ListEntityRecognizersRequest extends SpeakeasyBase {
    filter?: EntityRecognizerFilter;
    maxResults?: number;
    nextToken?: string;
}
