import { SpeakeasyBase } from "../../../internal/utils";
import { CrAllocationStrategyEnum } from "./crallocationstrategyenum";
import { Ec2Configuration } from "./ec2configuration";
import { LaunchTemplateSpecification } from "./launchtemplatespecification";
import { CrTypeEnum } from "./crtypeenum";
/**
 * An object representing an Batch compute resource. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the <i>Batch User Guide</i>.
**/
export declare class ComputeResource extends SpeakeasyBase {
    allocationStrategy?: CrAllocationStrategyEnum;
    bidPercentage?: number;
    desiredvCpus?: number;
    ec2Configuration?: Ec2Configuration[];
    ec2KeyPair?: string;
    imageId?: string;
    instanceRole?: string;
    instanceTypes?: string[];
    launchTemplate?: LaunchTemplateSpecification;
    maxvCpus: number;
    minvCpus?: number;
    placementGroup?: string;
    securityGroupIds?: string[];
    spotIamFleetRole?: string;
    subnets: string[];
    tags?: Map<string, string>;
    type: CrTypeEnum;
}
