import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitionToIaRulesEnum } from "./transitiontoiarulesenum";
import { TransitionToPrimaryStorageClassRulesEnum } from "./transitiontoprimarystorageclassrulesenum";



// LifecyclePolicy
/** 
 * Describes a policy used by EFS lifecycle management to transition files to the Infrequent Access (IA) storage class.
**/
export class LifecyclePolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TransitionToIA" })
  transitionToIa?: TransitionToIaRulesEnum;

  @SpeakeasyMetadata({ data: "json, name=TransitionToPrimaryStorageClass" })
  transitionToPrimaryStorageClass?: TransitionToPrimaryStorageClassRulesEnum;
}
