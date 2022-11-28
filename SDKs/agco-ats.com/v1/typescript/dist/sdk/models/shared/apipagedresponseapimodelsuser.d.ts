import { SpeakeasyBase } from "../../../internal/utils";
import { ApiModelsUser } from "./apimodelsuser";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";
/**
 * A response containing a page of results and metadata concerning the results
**/
export declare class ApiPagedResponseApiModelsUser extends SpeakeasyBase {
    entities: ApiModelsUser[];
    metadata: ApiPagedResponseMetadata;
}
