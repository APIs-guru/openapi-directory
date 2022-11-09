import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UpdateSystemModelsUpdateGroupSubscription } from "./updatesystemmodelsupdategroupsubscription";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";


// ApiPagedResponseUpdateSystemModelsUpdateGroupSubscription
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseUpdateSystemModelsUpdateGroupSubscription extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.UpdateSystemModelsUpdateGroupSubscription })
  entities: UpdateSystemModelsUpdateGroupSubscription[];

  @Metadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
