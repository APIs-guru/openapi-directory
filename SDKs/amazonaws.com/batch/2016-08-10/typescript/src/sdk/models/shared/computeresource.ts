import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CrAllocationStrategyEnum } from "./crallocationstrategyenum";
import { Ec2Configuration } from "./ec2configuration";
import { LaunchTemplateSpecification } from "./launchtemplatespecification";
import { CrTypeEnum } from "./crtypeenum";


// ComputeResource
/** 
 * An object representing an Batch compute resource. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the <i>Batch User Guide</i>.
**/
export class ComputeResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=allocationStrategy" })
  allocationStrategy?: CrAllocationStrategyEnum;

  @Metadata({ data: "json, name=bidPercentage" })
  bidPercentage?: number;

  @Metadata({ data: "json, name=desiredvCpus" })
  desiredvCpus?: number;

  @Metadata({ data: "json, name=ec2Configuration", elemType: shared.Ec2Configuration })
  ec2Configuration?: Ec2Configuration[];

  @Metadata({ data: "json, name=ec2KeyPair" })
  ec2KeyPair?: string;

  @Metadata({ data: "json, name=imageId" })
  imageId?: string;

  @Metadata({ data: "json, name=instanceRole" })
  instanceRole?: string;

  @Metadata({ data: "json, name=instanceTypes" })
  instanceTypes?: string[];

  @Metadata({ data: "json, name=launchTemplate" })
  launchTemplate?: LaunchTemplateSpecification;

  @Metadata({ data: "json, name=maxvCpus" })
  maxvCpus: number;

  @Metadata({ data: "json, name=minvCpus" })
  minvCpus?: number;

  @Metadata({ data: "json, name=placementGroup" })
  placementGroup?: string;

  @Metadata({ data: "json, name=securityGroupIds" })
  securityGroupIds?: string[];

  @Metadata({ data: "json, name=spotIamFleetRole" })
  spotIamFleetRole?: string;

  @Metadata({ data: "json, name=subnets" })
  subnets: string[];

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=type" })
  type: CrTypeEnum;
}
