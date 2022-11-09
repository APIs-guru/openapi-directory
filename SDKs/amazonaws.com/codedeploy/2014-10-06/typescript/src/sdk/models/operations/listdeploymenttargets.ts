import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListDeploymentTargetsXAmzTargetEnum {
    CodeDeploy20141006ListDeploymentTargets = "CodeDeploy_20141006.ListDeploymentTargets"
}


export class ListDeploymentTargetsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListDeploymentTargetsXAmzTargetEnum;
}


export class ListDeploymentTargetsRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListDeploymentTargetsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListDeploymentTargetsInput;
}


export class ListDeploymentTargetsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deploymentDoesNotExistException?: any;

  @Metadata()
  deploymentIdRequiredException?: any;

  @Metadata()
  deploymentNotStartedException?: any;

  @Metadata()
  invalidDeploymentIdException?: any;

  @Metadata()
  invalidDeploymentInstanceTypeException?: any;

  @Metadata()
  invalidInstanceStatusException?: any;

  @Metadata()
  invalidInstanceTypeException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  listDeploymentTargetsOutput?: shared.ListDeploymentTargetsOutput;

  @Metadata()
  statusCode: number;
}
