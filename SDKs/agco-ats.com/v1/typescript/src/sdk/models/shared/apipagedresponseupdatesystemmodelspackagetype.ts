import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateSystemModelsPackageType } from "./updatesystemmodelspackagetype";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";



// ApiPagedResponseUpdateSystemModelsPackageType
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseUpdateSystemModelsPackageType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: UpdateSystemModelsPackageType })
  entities: UpdateSystemModelsPackageType[];

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
