import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetDeploymentGroupXAmzTargetEnum {
    CodeDeploy20141006GetDeploymentGroup = "CodeDeploy_20141006.GetDeploymentGroup"
}


export class GetDeploymentGroupHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetDeploymentGroupXAmzTargetEnum;
}


export class GetDeploymentGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetDeploymentGroupHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetDeploymentGroupInput;
}


export class GetDeploymentGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applicationDoesNotExistException?: any;

  @SpeakeasyMetadata()
  applicationNameRequiredException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deploymentConfigDoesNotExistException?: any;

  @SpeakeasyMetadata()
  deploymentGroupDoesNotExistException?: any;

  @SpeakeasyMetadata()
  deploymentGroupNameRequiredException?: any;

  @SpeakeasyMetadata()
  getDeploymentGroupOutput?: shared.GetDeploymentGroupOutput;

  @SpeakeasyMetadata()
  invalidApplicationNameException?: any;

  @SpeakeasyMetadata()
  invalidDeploymentGroupNameException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
