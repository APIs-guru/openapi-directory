import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum BatchGetDeploymentGroupsXAmzTargetEnum {
    CodeDeploy20141006BatchGetDeploymentGroups = "CodeDeploy_20141006.BatchGetDeploymentGroups"
}


export class BatchGetDeploymentGroupsHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchGetDeploymentGroupsXAmzTargetEnum;
}


export class BatchGetDeploymentGroupsRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchGetDeploymentGroupsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchGetDeploymentGroupsInput;
}


export class BatchGetDeploymentGroupsResponse extends SpeakeasyBase {
  @Metadata()
  applicationDoesNotExistException?: any;

  @Metadata()
  applicationNameRequiredException?: any;

  @Metadata()
  batchGetDeploymentGroupsOutput?: shared.BatchGetDeploymentGroupsOutput;

  @Metadata()
  batchLimitExceededException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deploymentConfigDoesNotExistException?: any;

  @Metadata()
  deploymentGroupNameRequiredException?: any;

  @Metadata()
  invalidApplicationNameException?: any;

  @Metadata()
  invalidDeploymentGroupNameException?: any;

  @Metadata()
  statusCode: number;
}
