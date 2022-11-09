import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateDomainConfigurationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainConfigurationName" })
  domainConfigurationName: string;
}


export class UpdateDomainConfigurationHeaders extends SpeakeasyBase {
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
}


// UpdateDomainConfigurationRequestBodyAuthorizerConfig
/** 
 * An object that specifies the authorization service for a domain.
**/
export class UpdateDomainConfigurationRequestBodyAuthorizerConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowAuthorizerOverride" })
  allowAuthorizerOverride?: boolean;

  @Metadata({ data: "json, name=defaultAuthorizerName" })
  defaultAuthorizerName?: string;
}

export enum UpdateDomainConfigurationRequestBodyDomainConfigurationStatusEnum {
    Enabled = "ENABLED"
,    Disabled = "DISABLED"
}


export class UpdateDomainConfigurationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizerConfig" })
  authorizerConfig?: UpdateDomainConfigurationRequestBodyAuthorizerConfig;

  @Metadata({ data: "json, name=domainConfigurationStatus" })
  domainConfigurationStatus?: UpdateDomainConfigurationRequestBodyDomainConfigurationStatusEnum;

  @Metadata({ data: "json, name=removeAuthorizerConfig" })
  removeAuthorizerConfig?: boolean;
}


export class UpdateDomainConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDomainConfigurationPathParams;

  @Metadata()
  headers: UpdateDomainConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateDomainConfigurationRequestBody;
}


export class UpdateDomainConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  certificateValidationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  unauthorizedException?: any;

  @Metadata()
  updateDomainConfigurationResponse?: shared.UpdateDomainConfigurationResponse;
}
