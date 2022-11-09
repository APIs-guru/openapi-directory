import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DealerDbModelsVoucher } from "./dealerdbmodelsvoucher";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";


// ApiPagedResponseDealerDbModelsVoucher
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseDealerDbModelsVoucher extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.DealerDbModelsVoucher })
  entities: DealerDbModelsVoucher[];

  @Metadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
