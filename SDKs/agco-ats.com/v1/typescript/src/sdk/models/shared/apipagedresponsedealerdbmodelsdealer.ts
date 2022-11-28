import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DealerDbModelsDealer } from "./dealerdbmodelsdealer";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";



// ApiPagedResponseDealerDbModelsDealer
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseDealerDbModelsDealer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: DealerDbModelsDealer })
  entities: DealerDbModelsDealer[];

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
