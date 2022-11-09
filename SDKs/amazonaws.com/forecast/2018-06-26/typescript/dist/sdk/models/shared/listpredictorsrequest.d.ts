import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Filter } from "./filter";
export declare class ListPredictorsRequest extends SpeakeasyBase {
    filters?: Filter[];
    maxResults?: number;
    nextToken?: string;
}
