import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum BatchGetDeploymentInstancesXAmzTargetEnum {
    CodeDeploy20141006BatchGetDeploymentInstances = "CodeDeploy_20141006.BatchGetDeploymentInstances"
}


export class BatchGetDeploymentInstancesHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: BatchGetDeploymentInstancesXAmzTargetEnum;
}


export class BatchGetDeploymentInstancesRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchGetDeploymentInstancesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchGetDeploymentInstancesInput;
}


export class BatchGetDeploymentInstancesResponse extends SpeakeasyBase {
  @Metadata()
  batchGetDeploymentInstancesOutput?: shared.BatchGetDeploymentInstancesOutput;

  @Metadata()
  batchLimitExceededException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deploymentDoesNotExistException?: any;

  @Metadata()
  deploymentIdRequiredException?: any;

  @Metadata()
  instanceIdRequiredException?: any;

  @Metadata()
  invalidComputePlatformException?: any;

  @Metadata()
  invalidDeploymentIdException?: any;

  @Metadata()
  invalidInstanceNameException?: any;

  @Metadata()
  statusCode: number;
}
