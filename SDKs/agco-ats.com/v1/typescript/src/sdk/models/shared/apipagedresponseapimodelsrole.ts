import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiModelsRole } from "./apimodelsrole";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";


// ApiPagedResponseApiModelsRole
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseApiModelsRole extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.ApiModelsRole })
  entities: ApiModelsRole[];

  @Metadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
