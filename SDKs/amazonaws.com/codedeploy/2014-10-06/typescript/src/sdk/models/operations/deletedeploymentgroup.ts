import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteDeploymentGroupXAmzTargetEnum {
    CodeDeploy20141006DeleteDeploymentGroup = "CodeDeploy_20141006.DeleteDeploymentGroup"
}


export class DeleteDeploymentGroupHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteDeploymentGroupXAmzTargetEnum;
}


export class DeleteDeploymentGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteDeploymentGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteDeploymentGroupInput;
}


export class DeleteDeploymentGroupResponse extends SpeakeasyBase {
  @Metadata()
  applicationNameRequiredException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteDeploymentGroupOutput?: shared.DeleteDeploymentGroupOutput;

  @Metadata()
  deploymentGroupNameRequiredException?: any;

  @Metadata()
  invalidApplicationNameException?: any;

  @Metadata()
  invalidDeploymentGroupNameException?: any;

  @Metadata()
  invalidRoleException?: any;

  @Metadata()
  statusCode: number;
}
