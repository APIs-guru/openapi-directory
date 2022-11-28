import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateComputeEnvironmentHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// CreateComputeEnvironmentRequestBodyComputeResources
/** 
 * An object representing an Batch compute resource. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the <i>Batch User Guide</i>.
**/
export class CreateComputeEnvironmentRequestBodyComputeResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allocationStrategy" })
  allocationStrategy?: shared.CrAllocationStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=bidPercentage" })
  bidPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=desiredvCpus" })
  desiredvCpus?: number;

  @SpeakeasyMetadata({ data: "json, name=ec2Configuration", elemType: shared.Ec2Configuration })
  ec2Configuration?: shared.Ec2Configuration[];

  @SpeakeasyMetadata({ data: "json, name=ec2KeyPair" })
  ec2KeyPair?: string;

  @SpeakeasyMetadata({ data: "json, name=imageId" })
  imageId?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceRole" })
  instanceRole?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceTypes" })
  instanceTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=launchTemplate" })
  launchTemplate?: shared.LaunchTemplateSpecification;

  @SpeakeasyMetadata({ data: "json, name=maxvCpus" })
  maxvCpus?: number;

  @SpeakeasyMetadata({ data: "json, name=minvCpus" })
  minvCpus?: number;

  @SpeakeasyMetadata({ data: "json, name=placementGroup" })
  placementGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=securityGroupIds" })
  securityGroupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=spotIamFleetRole" })
  spotIamFleetRole?: string;

  @SpeakeasyMetadata({ data: "json, name=subnets" })
  subnets?: string[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: shared.CrTypeEnum;
}

export enum CreateComputeEnvironmentRequestBodyStateEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}

export enum CreateComputeEnvironmentRequestBodyTypeEnum {
    Managed = "MANAGED",
    Unmanaged = "UNMANAGED"
}


export class CreateComputeEnvironmentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=computeEnvironmentName" })
  computeEnvironmentName: string;

  @SpeakeasyMetadata({ data: "json, name=computeResources" })
  computeResources?: CreateComputeEnvironmentRequestBodyComputeResources;

  @SpeakeasyMetadata({ data: "json, name=serviceRole" })
  serviceRole?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: CreateComputeEnvironmentRequestBodyStateEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CreateComputeEnvironmentRequestBodyTypeEnum;
}


export class CreateComputeEnvironmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateComputeEnvironmentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateComputeEnvironmentRequestBody;
}


export class CreateComputeEnvironmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createComputeEnvironmentResponse?: shared.CreateComputeEnvironmentResponse;

  @SpeakeasyMetadata()
  serverException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
