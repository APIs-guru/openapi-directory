import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum LookupDeveloperIdentityXAmzTargetEnum {
    AwsCognitoIdentityServiceLookupDeveloperIdentity = "AWSCognitoIdentityService.LookupDeveloperIdentity"
}


export class LookupDeveloperIdentityHeaders extends SpeakeasyBase {
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
  xAmzTarget: LookupDeveloperIdentityXAmzTargetEnum;
}


export class LookupDeveloperIdentityRequest extends SpeakeasyBase {
  @Metadata()
  headers: LookupDeveloperIdentityHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.LookupDeveloperIdentityInput;
}


export class LookupDeveloperIdentityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  lookupDeveloperIdentityResponse?: shared.LookupDeveloperIdentityResponse;

  @Metadata()
  notAuthorizedException?: any;

  @Metadata()
  resourceConflictException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
