import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateUserPoolXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceUpdateUserPool = "AWSCognitoIdentityProviderService.UpdateUserPool"
}


export class UpdateUserPoolHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateUserPoolXAmzTargetEnum;
}


export class UpdateUserPoolRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateUserPoolHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateUserPoolRequest;
}


export class UpdateUserPoolResponse extends SpeakeasyBase {
  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  invalidEmailRoleAccessPolicyException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  invalidSmsRoleAccessPolicyException?: any;

  @Metadata()
  invalidSmsRoleTrustRelationshipException?: any;

  @Metadata()
  notAuthorizedException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  updateUserPoolResponse?: Map<string, any>;

  @Metadata()
  userImportInProgressException?: any;

  @Metadata()
  userPoolTaggingException?: any;
}
