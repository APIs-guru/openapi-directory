import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AdminLinkProviderForUserXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAdminLinkProviderForUser = "AWSCognitoIdentityProviderService.AdminLinkProviderForUser"
}


export class AdminLinkProviderForUserHeaders extends SpeakeasyBase {
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
  xAmzTarget: AdminLinkProviderForUserXAmzTargetEnum;
}


export class AdminLinkProviderForUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AdminLinkProviderForUserHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AdminLinkProviderForUserRequest;
}


export class AdminLinkProviderForUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  adminLinkProviderForUserResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  aliasExistsException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalErrorException?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  notAuthorizedException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  userNotFoundException?: any;
}
