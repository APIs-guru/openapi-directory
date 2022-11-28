import { SpeakeasyBase } from "../../../internal/utils";
import { DealerDbModelsLicense } from "./dealerdbmodelslicense";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";
/**
 * A response containing a page of results and metadata concerning the results
**/
export declare class ApiPagedResponseDealerDbModelsLicense extends SpeakeasyBase {
    entities: DealerDbModelsLicense[];
    metadata: ApiPagedResponseMetadata;
}
