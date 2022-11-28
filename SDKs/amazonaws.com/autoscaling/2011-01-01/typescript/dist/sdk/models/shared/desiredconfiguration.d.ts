import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchTemplateSpecification } from "./launchtemplatespecification";
import { MixedInstancesPolicy } from "./mixedinstancespolicy";
/**
 * <p>Describes the desired configuration for an instance refresh. </p> <p>If you specify a desired configuration, you must specify either a <code>LaunchTemplate</code> or a <code>MixedInstancesPolicy</code>. </p>
**/
export declare class DesiredConfiguration extends SpeakeasyBase {
    launchTemplate?: LaunchTemplateSpecification;
    mixedInstancesPolicy?: MixedInstancesPolicy;
}
