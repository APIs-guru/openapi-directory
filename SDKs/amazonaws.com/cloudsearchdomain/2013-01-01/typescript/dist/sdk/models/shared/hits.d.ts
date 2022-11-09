import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Hit } from "./hit";
/**
 * The collection of documents that match the search request.
**/
export declare class Hits extends SpeakeasyBase {
    cursor?: string;
    found?: number;
    hit?: Hit[];
    start?: number;
}
