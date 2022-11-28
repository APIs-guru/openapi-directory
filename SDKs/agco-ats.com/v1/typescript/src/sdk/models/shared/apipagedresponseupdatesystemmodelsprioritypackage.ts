import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateSystemModelsPriorityPackage } from "./updatesystemmodelsprioritypackage";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";



// ApiPagedResponseUpdateSystemModelsPriorityPackage
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseUpdateSystemModelsPriorityPackage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: UpdateSystemModelsPriorityPackage })
  entities: UpdateSystemModelsPriorityPackage[];

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
