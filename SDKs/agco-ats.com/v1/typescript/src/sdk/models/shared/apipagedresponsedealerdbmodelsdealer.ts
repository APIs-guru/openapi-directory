import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DealerDbModelsDealer } from "./dealerdbmodelsdealer";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";


// ApiPagedResponseDealerDbModelsDealer
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseDealerDbModelsDealer extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.DealerDbModelsDealer })
  entities: DealerDbModelsDealer[];

  @Metadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
