import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateDeploymentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=GroupId" })
  groupId: string;
}


export class CreateDeploymentHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amzn-Client-Token" })
  xAmznClientToken?: string;
}

export enum CreateDeploymentRequestBodyDeploymentTypeEnum {
    NewDeployment = "NewDeployment"
,    Redeployment = "Redeployment"
,    ResetDeployment = "ResetDeployment"
,    ForceResetDeployment = "ForceResetDeployment"
}


export class CreateDeploymentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeploymentId" })
  deploymentId?: string;

  @Metadata({ data: "json, name=DeploymentType" })
  deploymentType: CreateDeploymentRequestBodyDeploymentTypeEnum;

  @Metadata({ data: "json, name=GroupVersionId" })
  groupVersionId?: string;
}


export class CreateDeploymentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateDeploymentPathParams;

  @Metadata()
  headers: CreateDeploymentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateDeploymentRequestBody;
}


export class CreateDeploymentResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createDeploymentResponse?: shared.CreateDeploymentResponse;

  @Metadata()
  statusCode: number;
}
