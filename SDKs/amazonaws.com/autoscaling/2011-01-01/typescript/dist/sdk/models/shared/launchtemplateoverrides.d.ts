import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchTemplateSpecification } from "./launchtemplatespecification";
/**
 * Describes an override for a launch template. The maximum number of instance types that can be associated with an Auto Scaling group is 40. The maximum number of distinct launch templates you can define for an Auto Scaling group is 20. For more information about configuring overrides, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-override-options.html">Configuring overrides</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
**/
export declare class LaunchTemplateOverrides extends SpeakeasyBase {
    instanceType?: string;
    launchTemplateSpecification?: LaunchTemplateSpecification;
    weightedCapacity?: string;
}
