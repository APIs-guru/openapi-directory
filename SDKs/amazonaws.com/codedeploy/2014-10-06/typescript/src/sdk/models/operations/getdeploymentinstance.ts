import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetDeploymentInstanceXAmzTargetEnum {
    CodeDeploy20141006GetDeploymentInstance = "CodeDeploy_20141006.GetDeploymentInstance"
}


export class GetDeploymentInstanceHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetDeploymentInstanceXAmzTargetEnum;
}


export class GetDeploymentInstanceRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetDeploymentInstanceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetDeploymentInstanceInput;
}


export class GetDeploymentInstanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deploymentDoesNotExistException?: any;

  @Metadata()
  deploymentIdRequiredException?: any;

  @Metadata()
  getDeploymentInstanceOutput?: shared.GetDeploymentInstanceOutput;

  @Metadata()
  instanceDoesNotExistException?: any;

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
