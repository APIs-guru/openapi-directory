import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AdminSetUserPasswordXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAdminSetUserPassword = "AWSCognitoIdentityProviderService.AdminSetUserPassword"
}


export class AdminSetUserPasswordHeaders extends SpeakeasyBase {
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
  xAmzTarget: AdminSetUserPasswordXAmzTargetEnum;
}


export class AdminSetUserPasswordRequest extends SpeakeasyBase {
  @Metadata()
  headers: AdminSetUserPasswordHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AdminSetUserPasswordRequest;
}


export class AdminSetUserPasswordResponse extends SpeakeasyBase {
  @Metadata()
  adminSetUserPasswordResponse?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  invalidPasswordException?: any;

  @Metadata()
  notAuthorizedException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  userNotFoundException?: any;
}
