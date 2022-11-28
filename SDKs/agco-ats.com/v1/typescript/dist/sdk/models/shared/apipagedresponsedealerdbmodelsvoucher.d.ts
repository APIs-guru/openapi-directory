import { SpeakeasyBase } from "../../../internal/utils";
import { DealerDbModelsVoucher } from "./dealerdbmodelsvoucher";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";
/**
 * A response containing a page of results and metadata concerning the results
**/
export declare class ApiPagedResponseDealerDbModelsVoucher extends SpeakeasyBase {
    entities: DealerDbModelsVoucher[];
    metadata: ApiPagedResponseMetadata;
}
