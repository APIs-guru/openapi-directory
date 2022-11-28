import { SpeakeasyBase } from "../../../internal/utils";
import { DealerDbModelsDealer } from "./dealerdbmodelsdealer";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";
/**
 * A response containing a page of results and metadata concerning the results
**/
export declare class ApiPagedResponseDealerDbModelsDealer extends SpeakeasyBase {
    entities: DealerDbModelsDealer[];
    metadata: ApiPagedResponseMetadata;
}
