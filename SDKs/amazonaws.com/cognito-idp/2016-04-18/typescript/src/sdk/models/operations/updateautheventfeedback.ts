import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateAuthEventFeedbackXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceUpdateAuthEventFeedback = "AWSCognitoIdentityProviderService.UpdateAuthEventFeedback"
}


export class UpdateAuthEventFeedbackHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateAuthEventFeedbackXAmzTargetEnum;
}


export class UpdateAuthEventFeedbackRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateAuthEventFeedbackHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateAuthEventFeedbackRequest;
}


export class UpdateAuthEventFeedbackResponse extends SpeakeasyBase {
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
  updateAuthEventFeedbackResponse?: Map<string, any>;

  @Metadata()
  userNotFoundException?: any;

  @Metadata()
  userPoolAddOnNotEnabledException?: any;
}
