import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateComputeEnvironmentHeaders extends SpeakeasyBase {
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


// UpdateComputeEnvironmentRequestBodyComputeResources
/** 
 * An object representing the attributes of a compute environment that can be updated. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the <i>Batch User Guide</i>.
**/
export class UpdateComputeEnvironmentRequestBodyComputeResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desiredvCpus" })
  desiredvCpus?: number;

  @SpeakeasyMetadata({ data: "json, name=maxvCpus" })
  maxvCpus?: number;

  @SpeakeasyMetadata({ data: "json, name=minvCpus" })
  minvCpus?: number;

  @SpeakeasyMetadata({ data: "json, name=securityGroupIds" })
  securityGroupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=subnets" })
  subnets?: string[];
}

export enum UpdateComputeEnvironmentRequestBodyStateEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}


export class UpdateComputeEnvironmentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=computeEnvironment" })
  computeEnvironment: string;

  @SpeakeasyMetadata({ data: "json, name=computeResources" })
  computeResources?: UpdateComputeEnvironmentRequestBodyComputeResources;

  @SpeakeasyMetadata({ data: "json, name=serviceRole" })
  serviceRole?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: UpdateComputeEnvironmentRequestBodyStateEnum;
}


export class UpdateComputeEnvironmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateComputeEnvironmentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateComputeEnvironmentRequestBody;
}


export class UpdateComputeEnvironmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serverException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateComputeEnvironmentResponse?: shared.UpdateComputeEnvironmentResponse;
}
