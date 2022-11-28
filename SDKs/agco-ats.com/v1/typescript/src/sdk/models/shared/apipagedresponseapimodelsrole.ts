import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiModelsRole } from "./apimodelsrole";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";



// ApiPagedResponseApiModelsRole
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseApiModelsRole extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: ApiModelsRole })
  entities: ApiModelsRole[];

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
