import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Dataset } from "./dataset";
/**
 * Returned for a successful ListDatasets request.
**/
export declare class ListDatasetsResponse extends SpeakeasyBase {
    count?: number;
    datasets?: Dataset[];
    nextToken?: string;
}
