import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AdminUserGlobalSignOutXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAdminUserGlobalSignOut = "AWSCognitoIdentityProviderService.AdminUserGlobalSignOut"
}


export class AdminUserGlobalSignOutHeaders extends SpeakeasyBase {
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
  xAmzTarget: AdminUserGlobalSignOutXAmzTargetEnum;
}


export class AdminUserGlobalSignOutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AdminUserGlobalSignOutHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AdminUserGlobalSignOutRequest;
}


export class AdminUserGlobalSignOutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  adminUserGlobalSignOutResponse?: Map<string, any>;

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
