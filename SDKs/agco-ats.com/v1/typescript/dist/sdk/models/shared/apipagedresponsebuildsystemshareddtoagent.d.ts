import { SpeakeasyBase } from "../../../internal/utils";
import { BuildSystemSharedDtoAgent } from "./buildsystemshareddtoagent";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";
/**
 * A response containing a page of results and metadata concerning the results
**/
export declare class ApiPagedResponseBuildSystemSharedDtoAgent extends SpeakeasyBase {
    entities: BuildSystemSharedDtoAgent[];
    metadata: ApiPagedResponseMetadata;
}
