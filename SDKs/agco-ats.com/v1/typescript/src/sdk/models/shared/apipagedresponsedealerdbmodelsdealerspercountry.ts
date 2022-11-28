import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DealerDbModelsDealersPerCountry } from "./dealerdbmodelsdealerspercountry";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";



// ApiPagedResponseDealerDbModelsDealersPerCountry
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseDealerDbModelsDealersPerCountry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: DealerDbModelsDealersPerCountry })
  entities: DealerDbModelsDealersPerCountry[];

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
