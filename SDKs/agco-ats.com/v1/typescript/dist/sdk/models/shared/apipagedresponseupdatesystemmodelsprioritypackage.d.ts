import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateSystemModelsPriorityPackage } from "./updatesystemmodelsprioritypackage";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";
/**
 * A response containing a page of results and metadata concerning the results
**/
export declare class ApiPagedResponseUpdateSystemModelsPriorityPackage extends SpeakeasyBase {
    entities: UpdateSystemModelsPriorityPackage[];
    metadata: ApiPagedResponseMetadata;
}
