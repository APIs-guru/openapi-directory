import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UpdateSystemModelsAvailableUpdateGroupSubscription } from "./updatesystemmodelsavailableupdategroupsubscription";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";


// ApiPagedResponseUpdateSystemModelsAvailableUpdateGroupSubscription
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseUpdateSystemModelsAvailableUpdateGroupSubscription extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.UpdateSystemModelsAvailableUpdateGroupSubscription })
  entities: UpdateSystemModelsAvailableUpdateGroupSubscription[];

  @Metadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
