import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UpdateSystemModelsPackageStatusSummary } from "./updatesystemmodelspackagestatussummary";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";


// ApiPagedResponseUpdateSystemModelsPackageStatusSummary
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseUpdateSystemModelsPackageStatusSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.UpdateSystemModelsPackageStatusSummary })
  entities: UpdateSystemModelsPackageStatusSummary[];

  @Metadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
