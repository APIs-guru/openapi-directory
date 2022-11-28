import { SpeakeasyBase } from "../../../internal/utils";
import { AbortCriteria } from "./abortcriteria";
/**
 * The criteria that determine when and how a job abort takes place.
**/
export declare class AbortConfig extends SpeakeasyBase {
    criteriaList: AbortCriteria[];
}
