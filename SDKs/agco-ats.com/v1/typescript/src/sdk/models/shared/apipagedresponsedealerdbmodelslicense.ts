import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DealerDbModelsLicense } from "./dealerdbmodelslicense";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";


// ApiPagedResponseDealerDbModelsLicense
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseDealerDbModelsLicense extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.DealerDbModelsLicense })
  entities: DealerDbModelsLicense[];

  @Metadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
