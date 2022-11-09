import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiModelsUserEffectivePermission } from "./apimodelsusereffectivepermission";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";


// ApiPagedResponseApiModelsUserEffectivePermission
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseApiModelsUserEffectivePermission extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.ApiModelsUserEffectivePermission })
  entities: ApiModelsUserEffectivePermission[];

  @Metadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
