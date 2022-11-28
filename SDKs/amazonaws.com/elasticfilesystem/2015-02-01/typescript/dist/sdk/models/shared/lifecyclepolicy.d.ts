import { SpeakeasyBase } from "../../../internal/utils";
import { TransitionToIaRulesEnum } from "./transitiontoiarulesenum";
import { TransitionToPrimaryStorageClassRulesEnum } from "./transitiontoprimarystorageclassrulesenum";
/**
 * Describes a policy used by EFS lifecycle management to transition files to the Infrequent Access (IA) storage class.
**/
export declare class LifecyclePolicy extends SpeakeasyBase {
    transitionToIa?: TransitionToIaRulesEnum;
    transitionToPrimaryStorageClass?: TransitionToPrimaryStorageClassRulesEnum;
}
