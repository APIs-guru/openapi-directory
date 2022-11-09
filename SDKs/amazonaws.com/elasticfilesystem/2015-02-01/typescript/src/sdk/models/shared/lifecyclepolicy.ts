import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TransitionToIaRulesEnum } from "./transitiontoiarulesenum";
import { TransitionToPrimaryStorageClassRulesEnum } from "./transitiontoprimarystorageclassrulesenum";


// LifecyclePolicy
/** 
 * Describes a policy used by EFS lifecycle management to transition files to the Infrequent Access (IA) storage class.
**/
export class LifecyclePolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=TransitionToIA" })
  transitionToIa?: TransitionToIaRulesEnum;

  @Metadata({ data: "json, name=TransitionToPrimaryStorageClass" })
  transitionToPrimaryStorageClass?: TransitionToPrimaryStorageClassRulesEnum;
}
