import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateDeploymentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=GroupId" })
  groupId: string;
}


export class CreateDeploymentHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amzn-Client-Token" })
  xAmznClientToken?: string;
}

export enum CreateDeploymentRequestBodyDeploymentTypeEnum {
    NewDeployment = "NewDeployment",
    Redeployment = "Redeployment",
    ResetDeployment = "ResetDeployment",
    ForceResetDeployment = "ForceResetDeployment"
}


export class CreateDeploymentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeploymentId" })
  deploymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=DeploymentType" })
  deploymentType: CreateDeploymentRequestBodyDeploymentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=GroupVersionId" })
  groupVersionId?: string;
}


export class CreateDeploymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateDeploymentPathParams;

  @SpeakeasyMetadata()
  headers: CreateDeploymentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateDeploymentRequestBody;
}


export class CreateDeploymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createDeploymentResponse?: shared.CreateDeploymentResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
