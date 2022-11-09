import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SetRiskConfigurationXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceSetRiskConfiguration = "AWSCognitoIdentityProviderService.SetRiskConfiguration"
}


export class SetRiskConfigurationHeaders extends SpeakeasyBase {
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
  xAmzTarget: SetRiskConfigurationXAmzTargetEnum;
}


export class SetRiskConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  headers: SetRiskConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SetRiskConfigurationRequest;
}


export class SetRiskConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  codeDeliveryFailureException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  invalidEmailRoleAccessPolicyException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  notAuthorizedException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  setRiskConfigurationResponse?: shared.SetRiskConfigurationResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  userPoolAddOnNotEnabledException?: any;
}
