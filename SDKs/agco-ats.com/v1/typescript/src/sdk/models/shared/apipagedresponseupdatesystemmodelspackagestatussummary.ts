import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateSystemModelsPackageStatusSummary } from "./updatesystemmodelspackagestatussummary";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";



// ApiPagedResponseUpdateSystemModelsPackageStatusSummary
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseUpdateSystemModelsPackageStatusSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: UpdateSystemModelsPackageStatusSummary })
  entities: UpdateSystemModelsPackageStatusSummary[];

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
