import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum BatchGetDeploymentTargetsXAmzTargetEnum {
    CodeDeploy20141006BatchGetDeploymentTargets = "CodeDeploy_20141006.BatchGetDeploymentTargets"
}


export class BatchGetDeploymentTargetsHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchGetDeploymentTargetsXAmzTargetEnum;
}


export class BatchGetDeploymentTargetsRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchGetDeploymentTargetsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchGetDeploymentTargetsInput;
}


export class BatchGetDeploymentTargetsResponse extends SpeakeasyBase {
  @Metadata()
  batchGetDeploymentTargetsOutput?: shared.BatchGetDeploymentTargetsOutput;

  @Metadata()
  contentType: string;

  @Metadata()
  deploymentDoesNotExistException?: any;

  @Metadata()
  deploymentIdRequiredException?: any;

  @Metadata()
  deploymentNotStartedException?: any;

  @Metadata()
  deploymentTargetDoesNotExistException?: any;

  @Metadata()
  deploymentTargetIdRequiredException?: any;

  @Metadata()
  deploymentTargetListSizeExceededException?: any;

  @Metadata()
  instanceDoesNotExistException?: any;

  @Metadata()
  invalidDeploymentIdException?: any;

  @Metadata()
  invalidDeploymentTargetIdException?: any;

  @Metadata()
  statusCode: number;
}
