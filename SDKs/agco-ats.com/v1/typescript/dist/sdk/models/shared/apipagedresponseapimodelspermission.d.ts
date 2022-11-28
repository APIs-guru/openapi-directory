import { SpeakeasyBase } from "../../../internal/utils";
import { ApiModelsPermission } from "./apimodelspermission";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";
/**
 * A response containing a page of results and metadata concerning the results
**/
export declare class ApiPagedResponseApiModelsPermission extends SpeakeasyBase {
    entities: ApiModelsPermission[];
    metadata: ApiPagedResponseMetadata;
}
