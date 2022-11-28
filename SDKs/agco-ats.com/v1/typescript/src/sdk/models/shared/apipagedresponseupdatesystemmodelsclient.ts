import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateSystemModelsClient } from "./updatesystemmodelsclient";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";



// ApiPagedResponseUpdateSystemModelsClient
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseUpdateSystemModelsClient extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: UpdateSystemModelsClient })
  entities: UpdateSystemModelsClient[];

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
