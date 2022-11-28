import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LaunchTemplateSpecification } from "./launchtemplatespecification";
import { MixedInstancesPolicy } from "./mixedinstancespolicy";



// DesiredConfiguration
/** 
 * <p>Describes the desired configuration for an instance refresh. </p> <p>If you specify a desired configuration, you must specify either a <code>LaunchTemplate</code> or a <code>MixedInstancesPolicy</code>. </p>
**/
export class DesiredConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  launchTemplate?: LaunchTemplateSpecification;

  @SpeakeasyMetadata()
  mixedInstancesPolicy?: MixedInstancesPolicy;
}
