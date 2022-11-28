import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CrAllocationStrategyEnum } from "./crallocationstrategyenum";
import { Ec2Configuration } from "./ec2configuration";
import { LaunchTemplateSpecification } from "./launchtemplatespecification";
import { CrTypeEnum } from "./crtypeenum";



// ComputeResource
/** 
 * An object representing an Batch compute resource. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the <i>Batch User Guide</i>.
**/
export class ComputeResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allocationStrategy" })
  allocationStrategy?: CrAllocationStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=bidPercentage" })
  bidPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=desiredvCpus" })
  desiredvCpus?: number;

  @SpeakeasyMetadata({ data: "json, name=ec2Configuration", elemType: Ec2Configuration })
  ec2Configuration?: Ec2Configuration[];

  @SpeakeasyMetadata({ data: "json, name=ec2KeyPair" })
  ec2KeyPair?: string;

  @SpeakeasyMetadata({ data: "json, name=imageId" })
  imageId?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceRole" })
  instanceRole?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceTypes" })
  instanceTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=launchTemplate" })
  launchTemplate?: LaunchTemplateSpecification;

  @SpeakeasyMetadata({ data: "json, name=maxvCpus" })
  maxvCpus: number;

  @SpeakeasyMetadata({ data: "json, name=minvCpus" })
  minvCpus?: number;

  @SpeakeasyMetadata({ data: "json, name=placementGroup" })
  placementGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=securityGroupIds" })
  securityGroupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=spotIamFleetRole" })
  spotIamFleetRole?: string;

  @SpeakeasyMetadata({ data: "json, name=subnets" })
  subnets: string[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CrTypeEnum;
}
