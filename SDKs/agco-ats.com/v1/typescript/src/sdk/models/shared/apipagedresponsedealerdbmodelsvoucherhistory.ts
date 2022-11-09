import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DealerDbModelsVoucherHistory } from "./dealerdbmodelsvoucherhistory";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";


// ApiPagedResponseDealerDbModelsVoucherHistory
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseDealerDbModelsVoucherHistory extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.DealerDbModelsVoucherHistory })
  entities: DealerDbModelsVoucherHistory[];

  @Metadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
