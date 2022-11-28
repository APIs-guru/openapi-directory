import { SpeakeasyBase } from "../../../internal/utils";
import { BuildSystemSharedDtoActivityRun } from "./buildsystemshareddtoactivityrun";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";
/**
 * A response containing a page of results and metadata concerning the results
**/
export declare class ApiPagedResponseBuildSystemSharedDtoActivityRun extends SpeakeasyBase {
    entities: BuildSystemSharedDtoActivityRun[];
    metadata: ApiPagedResponseMetadata;
}
