import { SpeakeasyBase } from "../../../internal/utils";
import { ApiModelsRole } from "./apimodelsrole";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";
/**
 * A response containing a page of results and metadata concerning the results
**/
export declare class ApiPagedResponseApiModelsRole extends SpeakeasyBase {
    entities: ApiModelsRole[];
    metadata: ApiPagedResponseMetadata;
}
