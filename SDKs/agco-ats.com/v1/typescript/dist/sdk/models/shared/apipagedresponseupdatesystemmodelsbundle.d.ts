import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateSystemModelsBundle } from "./updatesystemmodelsbundle";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";
/**
 * A response containing a page of results and metadata concerning the results
**/
export declare class ApiPagedResponseUpdateSystemModelsBundle extends SpeakeasyBase {
    entities: UpdateSystemModelsBundle[];
    metadata: ApiPagedResponseMetadata;
}
