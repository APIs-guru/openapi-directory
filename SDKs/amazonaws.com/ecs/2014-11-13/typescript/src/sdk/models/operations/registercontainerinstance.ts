import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum RegisterContainerInstanceXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113RegisterContainerInstance = "AmazonEC2ContainerServiceV20141113.RegisterContainerInstance"
}


export class RegisterContainerInstanceHeaders extends SpeakeasyBase {
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
  xAmzTarget: RegisterContainerInstanceXAmzTargetEnum;
}


export class RegisterContainerInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RegisterContainerInstanceHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RegisterContainerInstanceRequest;
}


export class RegisterContainerInstanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  registerContainerInstanceResponse?: shared.RegisterContainerInstanceResponse;

  @SpeakeasyMetadata()
  serverException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
