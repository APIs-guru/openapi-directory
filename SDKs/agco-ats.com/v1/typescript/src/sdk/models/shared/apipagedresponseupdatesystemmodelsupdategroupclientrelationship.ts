import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UpdateSystemModelsUpdateGroupClientRelationship } from "./updatesystemmodelsupdategroupclientrelationship";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";


// ApiPagedResponseUpdateSystemModelsUpdateGroupClientRelationship
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseUpdateSystemModelsUpdateGroupClientRelationship extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.UpdateSystemModelsUpdateGroupClientRelationship })
  entities: UpdateSystemModelsUpdateGroupClientRelationship[];

  @Metadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
