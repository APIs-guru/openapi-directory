import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateSystemModelsClientStatus } from "./updatesystemmodelsclientstatus";
import { UpdateSystemModelsPagedClientStatusMetadata } from "./updatesystemmodelspagedclientstatusmetadata";



// ApiPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadata
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: UpdateSystemModelsClientStatus })
  entities: UpdateSystemModelsClientStatus[];

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata: UpdateSystemModelsPagedClientStatusMetadata;
}
