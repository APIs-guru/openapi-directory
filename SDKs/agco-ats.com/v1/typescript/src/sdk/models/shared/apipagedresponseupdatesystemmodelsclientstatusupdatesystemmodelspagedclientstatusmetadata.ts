import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UpdateSystemModelsClientStatus } from "./updatesystemmodelsclientstatus";
import { UpdateSystemModelsPagedClientStatusMetadata } from "./updatesystemmodelspagedclientstatusmetadata";


// ApiPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadata
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.UpdateSystemModelsClientStatus })
  entities: UpdateSystemModelsClientStatus[];

  @Metadata({ data: "json, name=Metadata" })
  metadata: UpdateSystemModelsPagedClientStatusMetadata;
}
