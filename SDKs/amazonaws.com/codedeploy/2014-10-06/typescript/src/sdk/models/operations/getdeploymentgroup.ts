import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetDeploymentGroupXAmzTargetEnum {
    CodeDeploy20141006GetDeploymentGroup = "CodeDeploy_20141006.GetDeploymentGroup"
}


export class GetDeploymentGroupHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetDeploymentGroupXAmzTargetEnum;
}


export class GetDeploymentGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetDeploymentGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetDeploymentGroupInput;
}


export class GetDeploymentGroupResponse extends SpeakeasyBase {
  @Metadata()
  applicationDoesNotExistException?: any;

  @Metadata()
  applicationNameRequiredException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deploymentConfigDoesNotExistException?: any;

  @Metadata()
  deploymentGroupDoesNotExistException?: any;

  @Metadata()
  deploymentGroupNameRequiredException?: any;

  @Metadata()
  getDeploymentGroupOutput?: shared.GetDeploymentGroupOutput;

  @Metadata()
  invalidApplicationNameException?: any;

  @Metadata()
  invalidDeploymentGroupNameException?: any;

  @Metadata()
  statusCode: number;
}
