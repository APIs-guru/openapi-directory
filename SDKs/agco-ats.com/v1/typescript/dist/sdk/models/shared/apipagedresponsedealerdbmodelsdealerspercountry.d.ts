import { SpeakeasyBase } from "../../../internal/utils";
import { DealerDbModelsDealersPerCountry } from "./dealerdbmodelsdealerspercountry";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";
/**
 * A response containing a page of results and metadata concerning the results
**/
export declare class ApiPagedResponseDealerDbModelsDealersPerCountry extends SpeakeasyBase {
    entities: DealerDbModelsDealersPerCountry[];
    metadata: ApiPagedResponseMetadata;
}
