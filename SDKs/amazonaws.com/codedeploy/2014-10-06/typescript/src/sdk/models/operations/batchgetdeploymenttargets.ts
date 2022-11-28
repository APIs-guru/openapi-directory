import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum BatchGetDeploymentTargetsXAmzTargetEnum {
    CodeDeploy20141006BatchGetDeploymentTargets = "CodeDeploy_20141006.BatchGetDeploymentTargets"
}


export class BatchGetDeploymentTargetsHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchGetDeploymentTargetsXAmzTargetEnum;
}


export class BatchGetDeploymentTargetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: BatchGetDeploymentTargetsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BatchGetDeploymentTargetsInput;
}


export class BatchGetDeploymentTargetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchGetDeploymentTargetsOutput?: shared.BatchGetDeploymentTargetsOutput;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deploymentDoesNotExistException?: any;

  @SpeakeasyMetadata()
  deploymentIdRequiredException?: any;

  @SpeakeasyMetadata()
  deploymentNotStartedException?: any;

  @SpeakeasyMetadata()
  deploymentTargetDoesNotExistException?: any;

  @SpeakeasyMetadata()
  deploymentTargetIdRequiredException?: any;

  @SpeakeasyMetadata()
  deploymentTargetListSizeExceededException?: any;

  @SpeakeasyMetadata()
  instanceDoesNotExistException?: any;

  @SpeakeasyMetadata()
  invalidDeploymentIdException?: any;

  @SpeakeasyMetadata()
  invalidDeploymentTargetIdException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
