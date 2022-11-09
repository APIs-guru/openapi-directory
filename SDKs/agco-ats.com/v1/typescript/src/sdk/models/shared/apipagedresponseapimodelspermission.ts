import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiModelsPermission } from "./apimodelspermission";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";


// ApiPagedResponseApiModelsPermission
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseApiModelsPermission extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.ApiModelsPermission })
  entities: ApiModelsPermission[];

  @Metadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
