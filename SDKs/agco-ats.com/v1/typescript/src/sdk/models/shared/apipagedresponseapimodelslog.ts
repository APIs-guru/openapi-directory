import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiModelsLog } from "./apimodelslog";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";



// ApiPagedResponseApiModelsLog
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseApiModelsLog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: ApiModelsLog })
  entities: ApiModelsLog[];

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
