import { SpeakeasyBase } from "../../../internal/utils";
import { ApiModelsLog } from "./apimodelslog";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";
/**
 * A response containing a page of results and metadata concerning the results
**/
export declare class ApiPagedResponseApiModelsLog extends SpeakeasyBase {
    entities: ApiModelsLog[];
    metadata: ApiPagedResponseMetadata;
}
