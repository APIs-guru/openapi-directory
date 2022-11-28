import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateSystemModelsAvailableUpdateGroupSubscription } from "./updatesystemmodelsavailableupdategroupsubscription";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";



// ApiPagedResponseUpdateSystemModelsAvailableUpdateGroupSubscription
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseUpdateSystemModelsAvailableUpdateGroupSubscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: UpdateSystemModelsAvailableUpdateGroupSubscription })
  entities: UpdateSystemModelsAvailableUpdateGroupSubscription[];

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
