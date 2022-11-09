import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UpdateSystemModelsPriorityPackage } from "./updatesystemmodelsprioritypackage";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";


// ApiPagedResponseUpdateSystemModelsPriorityPackage
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseUpdateSystemModelsPriorityPackage extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.UpdateSystemModelsPriorityPackage })
  entities: UpdateSystemModelsPriorityPackage[];

  @Metadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
