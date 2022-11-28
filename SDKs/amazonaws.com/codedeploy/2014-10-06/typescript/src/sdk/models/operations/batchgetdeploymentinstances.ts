import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum BatchGetDeploymentInstancesXAmzTargetEnum {
    CodeDeploy20141006BatchGetDeploymentInstances = "CodeDeploy_20141006.BatchGetDeploymentInstances"
}


export class BatchGetDeploymentInstancesHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: BatchGetDeploymentInstancesXAmzTargetEnum;
}


export class BatchGetDeploymentInstancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: BatchGetDeploymentInstancesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BatchGetDeploymentInstancesInput;
}


export class BatchGetDeploymentInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchGetDeploymentInstancesOutput?: shared.BatchGetDeploymentInstancesOutput;

  @SpeakeasyMetadata()
  batchLimitExceededException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deploymentDoesNotExistException?: any;

  @SpeakeasyMetadata()
  deploymentIdRequiredException?: any;

  @SpeakeasyMetadata()
  instanceIdRequiredException?: any;

  @SpeakeasyMetadata()
  invalidComputePlatformException?: any;

  @SpeakeasyMetadata()
  invalidDeploymentIdException?: any;

  @SpeakeasyMetadata()
  invalidInstanceNameException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
