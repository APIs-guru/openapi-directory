import { SpeakeasyBase } from "../../../internal/utils";
import { BuildSystemSharedDtoJob } from "./buildsystemshareddtojob";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";
/**
 * A response containing a page of results and metadata concerning the results
**/
export declare class ApiPagedResponseBuildSystemSharedDtoJob extends SpeakeasyBase {
    entities: BuildSystemSharedDtoJob[];
    metadata: ApiPagedResponseMetadata;
}
