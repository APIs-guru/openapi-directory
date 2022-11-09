import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AdminUpdateAuthEventFeedbackXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAdminUpdateAuthEventFeedback = "AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback"
}


export class AdminUpdateAuthEventFeedbackHeaders extends SpeakeasyBase {
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
  xAmzTarget: AdminUpdateAuthEventFeedbackXAmzTargetEnum;
}


export class AdminUpdateAuthEventFeedbackRequest extends SpeakeasyBase {
  @Metadata()
  headers: AdminUpdateAuthEventFeedbackHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AdminUpdateAuthEventFeedbackRequest;
}


export class AdminUpdateAuthEventFeedbackResponse extends SpeakeasyBase {
  @Metadata()
  adminUpdateAuthEventFeedbackResponse?: Map<string, any>;

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
  userNotFoundException?: any;

  @Metadata()
  userPoolAddOnNotEnabledException?: any;
}
