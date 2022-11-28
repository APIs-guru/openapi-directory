import { SpeakeasyBase } from "../../../internal/utils";
import { BuildSystemSharedDtoStep } from "./buildsystemshareddtostep";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";
/**
 * A response containing a page of results and metadata concerning the results
**/
export declare class ApiPagedResponseBuildSystemSharedDtoStep extends SpeakeasyBase {
    entities: BuildSystemSharedDtoStep[];
    metadata: ApiPagedResponseMetadata;
}
