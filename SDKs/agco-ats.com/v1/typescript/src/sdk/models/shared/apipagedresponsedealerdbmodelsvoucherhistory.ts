import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DealerDbModelsVoucherHistory } from "./dealerdbmodelsvoucherhistory";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";



// ApiPagedResponseDealerDbModelsVoucherHistory
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseDealerDbModelsVoucherHistory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: DealerDbModelsVoucherHistory })
  entities: DealerDbModelsVoucherHistory[];

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
