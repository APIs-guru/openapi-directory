import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateSystemModelsClient } from "./updatesystemmodelsclient";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";
/**
 * A response containing a page of results and metadata concerning the results
**/
export declare class ApiPagedResponseUpdateSystemModelsClient extends SpeakeasyBase {
    entities: UpdateSystemModelsClient[];
    metadata: ApiPagedResponseMetadata;
}
