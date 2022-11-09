import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SetPrincipalTagAttributeMapXAmzTargetEnum {
    AwsCognitoIdentityServiceSetPrincipalTagAttributeMap = "AWSCognitoIdentityService.SetPrincipalTagAttributeMap"
}


export class SetPrincipalTagAttributeMapHeaders extends SpeakeasyBase {
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
  xAmzTarget: SetPrincipalTagAttributeMapXAmzTargetEnum;
}


export class SetPrincipalTagAttributeMapRequest extends SpeakeasyBase {
  @Metadata()
  headers: SetPrincipalTagAttributeMapHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SetPrincipalTagAttributeMapInput;
}


export class SetPrincipalTagAttributeMapResponse extends SpeakeasyBase {
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
  setPrincipalTagAttributeMapResponse?: shared.SetPrincipalTagAttributeMapResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
