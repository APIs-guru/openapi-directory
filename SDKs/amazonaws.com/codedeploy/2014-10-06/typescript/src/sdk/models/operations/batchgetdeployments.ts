import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum BatchGetDeploymentsXAmzTargetEnum {
    CodeDeploy20141006BatchGetDeployments = "CodeDeploy_20141006.BatchGetDeployments"
}


export class BatchGetDeploymentsHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchGetDeploymentsXAmzTargetEnum;
}


export class BatchGetDeploymentsRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchGetDeploymentsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchGetDeploymentsInput;
}


export class BatchGetDeploymentsResponse extends SpeakeasyBase {
  @Metadata()
  batchGetDeploymentsOutput?: shared.BatchGetDeploymentsOutput;

  @Metadata()
  batchLimitExceededException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deploymentIdRequiredException?: any;

  @Metadata()
  invalidDeploymentIdException?: any;

  @Metadata()
  statusCode: number;
}
