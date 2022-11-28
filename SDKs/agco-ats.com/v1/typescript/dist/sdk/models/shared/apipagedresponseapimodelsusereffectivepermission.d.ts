import { SpeakeasyBase } from "../../../internal/utils";
import { ApiModelsUserEffectivePermission } from "./apimodelsusereffectivepermission";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";
/**
 * A response containing a page of results and metadata concerning the results
**/
export declare class ApiPagedResponseApiModelsUserEffectivePermission extends SpeakeasyBase {
    entities: ApiModelsUserEffectivePermission[];
    metadata: ApiPagedResponseMetadata;
}
