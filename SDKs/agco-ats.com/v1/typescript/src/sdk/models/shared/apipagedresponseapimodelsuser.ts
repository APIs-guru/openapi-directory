import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiModelsUser } from "./apimodelsuser";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";



// ApiPagedResponseApiModelsUser
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseApiModelsUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: ApiModelsUser })
  entities: ApiModelsUser[];

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
