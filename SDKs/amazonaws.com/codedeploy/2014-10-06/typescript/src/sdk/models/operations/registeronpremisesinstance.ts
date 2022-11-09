import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RegisterOnPremisesInstanceXAmzTargetEnum {
    CodeDeploy20141006RegisterOnPremisesInstance = "CodeDeploy_20141006.RegisterOnPremisesInstance"
}


export class RegisterOnPremisesInstanceHeaders extends SpeakeasyBase {
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
  xAmzTarget: RegisterOnPremisesInstanceXAmzTargetEnum;
}


export class RegisterOnPremisesInstanceRequest extends SpeakeasyBase {
  @Metadata()
  headers: RegisterOnPremisesInstanceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RegisterOnPremisesInstanceInput;
}


export class RegisterOnPremisesInstanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  iamArnRequiredException?: any;

  @Metadata()
  iamSessionArnAlreadyRegisteredException?: any;

  @Metadata()
  iamUserArnAlreadyRegisteredException?: any;

  @Metadata()
  iamUserArnRequiredException?: any;

  @Metadata()
  instanceNameAlreadyRegisteredException?: any;

  @Metadata()
  instanceNameRequiredException?: any;

  @Metadata()
  invalidIamSessionArnException?: any;

  @Metadata()
  invalidIamUserArnException?: any;

  @Metadata()
  invalidInstanceNameException?: any;

  @Metadata()
  multipleIamArnsProvidedException?: any;

  @Metadata()
  statusCode: number;
}
