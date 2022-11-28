import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum RegisterOnPremisesInstanceXAmzTargetEnum {
    CodeDeploy20141006RegisterOnPremisesInstance = "CodeDeploy_20141006.RegisterOnPremisesInstance"
}


export class RegisterOnPremisesInstanceHeaders extends SpeakeasyBase {
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
  xAmzTarget: RegisterOnPremisesInstanceXAmzTargetEnum;
}


export class RegisterOnPremisesInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RegisterOnPremisesInstanceHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RegisterOnPremisesInstanceInput;
}


export class RegisterOnPremisesInstanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  iamArnRequiredException?: any;

  @SpeakeasyMetadata()
  iamSessionArnAlreadyRegisteredException?: any;

  @SpeakeasyMetadata()
  iamUserArnAlreadyRegisteredException?: any;

  @SpeakeasyMetadata()
  iamUserArnRequiredException?: any;

  @SpeakeasyMetadata()
  instanceNameAlreadyRegisteredException?: any;

  @SpeakeasyMetadata()
  instanceNameRequiredException?: any;

  @SpeakeasyMetadata()
  invalidIamSessionArnException?: any;

  @SpeakeasyMetadata()
  invalidIamUserArnException?: any;

  @SpeakeasyMetadata()
  invalidInstanceNameException?: any;

  @SpeakeasyMetadata()
  multipleIamArnsProvidedException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
