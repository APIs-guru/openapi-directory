import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RegisterContainerInstanceXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113RegisterContainerInstance = "AmazonEC2ContainerServiceV20141113.RegisterContainerInstance"
}


export class RegisterContainerInstanceHeaders extends SpeakeasyBase {
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
  xAmzTarget: RegisterContainerInstanceXAmzTargetEnum;
}


export class RegisterContainerInstanceRequest extends SpeakeasyBase {
  @Metadata()
  headers: RegisterContainerInstanceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RegisterContainerInstanceRequest;
}


export class RegisterContainerInstanceResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  registerContainerInstanceResponse?: shared.RegisterContainerInstanceResponse;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;
}
