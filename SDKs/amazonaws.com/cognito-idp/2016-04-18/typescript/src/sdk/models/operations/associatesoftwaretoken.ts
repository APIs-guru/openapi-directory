import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AssociateSoftwareTokenXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAssociateSoftwareToken = "AWSCognitoIdentityProviderService.AssociateSoftwareToken"
}


export class AssociateSoftwareTokenHeaders extends SpeakeasyBase {
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
  xAmzTarget: AssociateSoftwareTokenXAmzTargetEnum;
}


export class AssociateSoftwareTokenRequest extends SpeakeasyBase {
  @Metadata()
  headers: AssociateSoftwareTokenHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AssociateSoftwareTokenRequest;
}


export class AssociateSoftwareTokenResponse extends SpeakeasyBase {
  @Metadata()
  associateSoftwareTokenResponse?: shared.AssociateSoftwareTokenResponse;

  @Metadata()
  concurrentModificationException?: any;

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
  softwareTokenMfaNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
