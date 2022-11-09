import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateComputeEnvironmentHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// CreateComputeEnvironmentRequestBodyComputeResources
/** 
 * An object representing an Batch compute resource. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the <i>Batch User Guide</i>.
**/
export class CreateComputeEnvironmentRequestBodyComputeResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=allocationStrategy" })
  allocationStrategy?: shared.CrAllocationStrategyEnum;

  @Metadata({ data: "json, name=bidPercentage" })
  bidPercentage?: number;

  @Metadata({ data: "json, name=desiredvCpus" })
  desiredvCpus?: number;

  @Metadata({ data: "json, name=ec2Configuration", elemType: shared.Ec2Configuration })
  ec2Configuration?: shared.Ec2Configuration[];

  @Metadata({ data: "json, name=ec2KeyPair" })
  ec2KeyPair?: string;

  @Metadata({ data: "json, name=imageId" })
  imageId?: string;

  @Metadata({ data: "json, name=instanceRole" })
  instanceRole?: string;

  @Metadata({ data: "json, name=instanceTypes" })
  instanceTypes?: string[];

  @Metadata({ data: "json, name=launchTemplate" })
  launchTemplate?: shared.LaunchTemplateSpecification;

  @Metadata({ data: "json, name=maxvCpus" })
  maxvCpus?: number;

  @Metadata({ data: "json, name=minvCpus" })
  minvCpus?: number;

  @Metadata({ data: "json, name=placementGroup" })
  placementGroup?: string;

  @Metadata({ data: "json, name=securityGroupIds" })
  securityGroupIds?: string[];

  @Metadata({ data: "json, name=spotIamFleetRole" })
  spotIamFleetRole?: string;

  @Metadata({ data: "json, name=subnets" })
  subnets?: string[];

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=type" })
  type?: shared.CrTypeEnum;
}

export enum CreateComputeEnvironmentRequestBodyStateEnum {
    Enabled = "ENABLED"
,    Disabled = "DISABLED"
}

export enum CreateComputeEnvironmentRequestBodyTypeEnum {
    Managed = "MANAGED"
,    Unmanaged = "UNMANAGED"
}


export class CreateComputeEnvironmentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=computeEnvironmentName" })
  computeEnvironmentName: string;

  @Metadata({ data: "json, name=computeResources" })
  computeResources?: CreateComputeEnvironmentRequestBodyComputeResources;

  @Metadata({ data: "json, name=serviceRole" })
  serviceRole?: string;

  @Metadata({ data: "json, name=state" })
  state?: CreateComputeEnvironmentRequestBodyStateEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=type" })
  type: CreateComputeEnvironmentRequestBodyTypeEnum;
}


export class CreateComputeEnvironmentRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateComputeEnvironmentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateComputeEnvironmentRequestBody;
}


export class CreateComputeEnvironmentResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createComputeEnvironmentResponse?: shared.CreateComputeEnvironmentResponse;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;
}
