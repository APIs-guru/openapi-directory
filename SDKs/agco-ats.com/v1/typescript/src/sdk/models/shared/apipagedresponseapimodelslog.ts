import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiModelsLog } from "./apimodelslog";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";


// ApiPagedResponseApiModelsLog
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseApiModelsLog extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.ApiModelsLog })
  entities: ApiModelsLog[];

  @Metadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
