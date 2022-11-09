import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateComputeEnvironmentHeaders extends SpeakeasyBase {
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


// UpdateComputeEnvironmentRequestBodyComputeResources
/** 
 * An object representing the attributes of a compute environment that can be updated. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the <i>Batch User Guide</i>.
**/
export class UpdateComputeEnvironmentRequestBodyComputeResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=desiredvCpus" })
  desiredvCpus?: number;

  @Metadata({ data: "json, name=maxvCpus" })
  maxvCpus?: number;

  @Metadata({ data: "json, name=minvCpus" })
  minvCpus?: number;

  @Metadata({ data: "json, name=securityGroupIds" })
  securityGroupIds?: string[];

  @Metadata({ data: "json, name=subnets" })
  subnets?: string[];
}

export enum UpdateComputeEnvironmentRequestBodyStateEnum {
    Enabled = "ENABLED"
,    Disabled = "DISABLED"
}


export class UpdateComputeEnvironmentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=computeEnvironment" })
  computeEnvironment: string;

  @Metadata({ data: "json, name=computeResources" })
  computeResources?: UpdateComputeEnvironmentRequestBodyComputeResources;

  @Metadata({ data: "json, name=serviceRole" })
  serviceRole?: string;

  @Metadata({ data: "json, name=state" })
  state?: UpdateComputeEnvironmentRequestBodyStateEnum;
}


export class UpdateComputeEnvironmentRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateComputeEnvironmentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateComputeEnvironmentRequestBody;
}


export class UpdateComputeEnvironmentResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateComputeEnvironmentResponse?: shared.UpdateComputeEnvironmentResponse;
}
