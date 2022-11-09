import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateIdentityProviderXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceUpdateIdentityProvider = "AWSCognitoIdentityProviderService.UpdateIdentityProvider"
}


export class UpdateIdentityProviderHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateIdentityProviderXAmzTargetEnum;
}


export class UpdateIdentityProviderRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateIdentityProviderHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateIdentityProviderRequest;
}


export class UpdateIdentityProviderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  notAuthorizedException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  unsupportedIdentityProviderException?: any;

  @Metadata()
  updateIdentityProviderResponse?: shared.UpdateIdentityProviderResponse;
}
