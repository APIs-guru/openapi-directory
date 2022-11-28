import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateDomainConfigurationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainConfigurationName" })
  domainConfigurationName: string;
}


export class UpdateDomainConfigurationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// UpdateDomainConfigurationRequestBodyAuthorizerConfig
/** 
 * An object that specifies the authorization service for a domain.
**/
export class UpdateDomainConfigurationRequestBodyAuthorizerConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowAuthorizerOverride" })
  allowAuthorizerOverride?: boolean;

  @SpeakeasyMetadata({ data: "json, name=defaultAuthorizerName" })
  defaultAuthorizerName?: string;
}

export enum UpdateDomainConfigurationRequestBodyDomainConfigurationStatusEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}


export class UpdateDomainConfigurationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizerConfig" })
  authorizerConfig?: UpdateDomainConfigurationRequestBodyAuthorizerConfig;

  @SpeakeasyMetadata({ data: "json, name=domainConfigurationStatus" })
  domainConfigurationStatus?: UpdateDomainConfigurationRequestBodyDomainConfigurationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=removeAuthorizerConfig" })
  removeAuthorizerConfig?: boolean;
}


export class UpdateDomainConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateDomainConfigurationPathParams;

  @SpeakeasyMetadata()
  headers: UpdateDomainConfigurationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateDomainConfigurationRequestBody;
}


export class UpdateDomainConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificateValidationException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  unauthorizedException?: any;

  @SpeakeasyMetadata()
  updateDomainConfigurationResponse?: shared.UpdateDomainConfigurationResponse;
}
