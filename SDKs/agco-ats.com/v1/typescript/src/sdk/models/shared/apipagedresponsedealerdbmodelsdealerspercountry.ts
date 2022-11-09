import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DealerDbModelsDealersPerCountry } from "./dealerdbmodelsdealerspercountry";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";


// ApiPagedResponseDealerDbModelsDealersPerCountry
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseDealerDbModelsDealersPerCountry extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.DealerDbModelsDealersPerCountry })
  entities: DealerDbModelsDealersPerCountry[];

  @Metadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
