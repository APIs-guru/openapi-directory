import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiModelsPermission } from "./apimodelspermission";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";



// ApiPagedResponseApiModelsPermission
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseApiModelsPermission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: ApiModelsPermission })
  entities: ApiModelsPermission[];

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
