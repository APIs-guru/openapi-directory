import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DealerDbModelsVoucher } from "./dealerdbmodelsvoucher";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";



// ApiPagedResponseDealerDbModelsVoucher
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseDealerDbModelsVoucher extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: DealerDbModelsVoucher })
  entities: DealerDbModelsVoucher[];

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
