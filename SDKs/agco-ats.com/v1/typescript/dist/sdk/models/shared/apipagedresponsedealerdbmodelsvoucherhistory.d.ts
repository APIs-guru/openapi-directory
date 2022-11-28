import { SpeakeasyBase } from "../../../internal/utils";
import { DealerDbModelsVoucherHistory } from "./dealerdbmodelsvoucherhistory";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";
/**
 * A response containing a page of results and metadata concerning the results
**/
export declare class ApiPagedResponseDealerDbModelsVoucherHistory extends SpeakeasyBase {
    entities: DealerDbModelsVoucherHistory[];
    metadata: ApiPagedResponseMetadata;
}
