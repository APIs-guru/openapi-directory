import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateUserPoolDomainXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceCreateUserPoolDomain = "AWSCognitoIdentityProviderService.CreateUserPoolDomain"
}


export class CreateUserPoolDomainHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateUserPoolDomainXAmzTargetEnum;
}


export class CreateUserPoolDomainRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateUserPoolDomainHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateUserPoolDomainRequest;
}


export class CreateUserPoolDomainResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createUserPoolDomainResponse?: shared.CreateUserPoolDomainResponse;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notAuthorizedException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
