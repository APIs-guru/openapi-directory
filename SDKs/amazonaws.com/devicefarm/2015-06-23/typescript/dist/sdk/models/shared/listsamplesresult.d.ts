import { SpeakeasyBase } from "../../../internal/utils";
import { Sample } from "./sample";
/**
 * Represents the result of a list samples request.
**/
export declare class ListSamplesResult extends SpeakeasyBase {
    nextToken?: string;
    samples?: Sample[];
}
