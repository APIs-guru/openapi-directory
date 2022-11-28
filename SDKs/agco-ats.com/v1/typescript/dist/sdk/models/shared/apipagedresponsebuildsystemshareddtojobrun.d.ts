import { SpeakeasyBase } from "../../../internal/utils";
import { BuildSystemSharedDtoJobRun } from "./buildsystemshareddtojobrun";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";
/**
 * A response containing a page of results and metadata concerning the results
**/
export declare class ApiPagedResponseBuildSystemSharedDtoJobRun extends SpeakeasyBase {
    entities: BuildSystemSharedDtoJobRun[];
    metadata: ApiPagedResponseMetadata;
}
