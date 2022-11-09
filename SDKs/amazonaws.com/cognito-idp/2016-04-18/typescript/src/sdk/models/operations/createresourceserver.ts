import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateResourceServerXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceCreateResourceServer = "AWSCognitoIdentityProviderService.CreateResourceServer"
}


export class CreateResourceServerHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateResourceServerXAmzTargetEnum;
}


export class CreateResourceServerRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateResourceServerHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateResourceServerRequest;
}


export class CreateResourceServerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createResourceServerResponse?: shared.CreateResourceServerResponse;

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

  @Metadata()
  tooManyRequestsException?: any;
}
