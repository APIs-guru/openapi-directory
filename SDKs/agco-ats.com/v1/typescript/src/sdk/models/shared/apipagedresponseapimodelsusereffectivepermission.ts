import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiModelsUserEffectivePermission } from "./apimodelsusereffectivepermission";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";



// ApiPagedResponseApiModelsUserEffectivePermission
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseApiModelsUserEffectivePermission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: ApiModelsUserEffectivePermission })
  entities: ApiModelsUserEffectivePermission[];

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
