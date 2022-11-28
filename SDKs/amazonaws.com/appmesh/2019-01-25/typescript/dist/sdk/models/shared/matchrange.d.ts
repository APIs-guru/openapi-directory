import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that represents the range of values to match on. The first character of the range is included in the range, though the last character is not. For example, if the range specified were 1-100, only values 1-99 would be matched.
**/
export declare class MatchRange extends SpeakeasyBase {
    end: number;
    start: number;
}
