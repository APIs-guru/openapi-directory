import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RegisterTaskDefinitionXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113RegisterTaskDefinition = "AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition"
}


export class RegisterTaskDefinitionHeaders extends SpeakeasyBase {
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
  xAmzTarget: RegisterTaskDefinitionXAmzTargetEnum;
}


export class RegisterTaskDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  headers: RegisterTaskDefinitionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RegisterTaskDefinitionRequest;
}


export class RegisterTaskDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  registerTaskDefinitionResponse?: shared.RegisterTaskDefinitionResponse;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;
}
