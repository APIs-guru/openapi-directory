import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetPrincipalTagAttributeMapXAmzTargetEnum {
    AwsCognitoIdentityServiceGetPrincipalTagAttributeMap = "AWSCognitoIdentityService.GetPrincipalTagAttributeMap"
}


export class GetPrincipalTagAttributeMapHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetPrincipalTagAttributeMapXAmzTargetEnum;
}


export class GetPrincipalTagAttributeMapRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetPrincipalTagAttributeMapHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetPrincipalTagAttributeMapInput;
}


export class GetPrincipalTagAttributeMapResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPrincipalTagAttributeMapResponse?: shared.GetPrincipalTagAttributeMapResponse;

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
}
