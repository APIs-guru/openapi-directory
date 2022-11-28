import { SpeakeasyBase } from "../../../internal/utils";
import { BuildSystemSharedDtoActivity } from "./buildsystemshareddtoactivity";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";
/**
 * A response containing a page of results and metadata concerning the results
**/
export declare class ApiPagedResponseBuildSystemSharedDtoActivity extends SpeakeasyBase {
    entities: BuildSystemSharedDtoActivity[];
    metadata: ApiPagedResponseMetadata;
}
