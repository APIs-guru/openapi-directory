import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DealerDbModelsLicense } from "./dealerdbmodelslicense";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";



// ApiPagedResponseDealerDbModelsLicense
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseDealerDbModelsLicense extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: DealerDbModelsLicense })
  entities: DealerDbModelsLicense[];

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
