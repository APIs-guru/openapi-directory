import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiModelsUser } from "./apimodelsuser";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";


// ApiPagedResponseApiModelsUser
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseApiModelsUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.ApiModelsUser })
  entities: ApiModelsUser[];

  @Metadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
