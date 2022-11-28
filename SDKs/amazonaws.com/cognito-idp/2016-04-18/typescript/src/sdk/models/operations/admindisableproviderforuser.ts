import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AdminDisableProviderForUserXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAdminDisableProviderForUser = "AWSCognitoIdentityProviderService.AdminDisableProviderForUser"
}


export class AdminDisableProviderForUserHeaders extends SpeakeasyBase {
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
  xAmzTarget: AdminDisableProviderForUserXAmzTargetEnum;
}


export class AdminDisableProviderForUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AdminDisableProviderForUserHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AdminDisableProviderForUserRequest;
}


export class AdminDisableProviderForUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  adminDisableProviderForUserResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  aliasExistsException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalErrorException?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

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
