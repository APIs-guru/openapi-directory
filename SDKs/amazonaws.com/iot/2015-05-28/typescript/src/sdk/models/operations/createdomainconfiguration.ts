import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateDomainConfigurationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainConfigurationName" })
  domainConfigurationName: string;
}


export class CreateDomainConfigurationHeaders extends SpeakeasyBase {
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


// CreateDomainConfigurationRequestBodyAuthorizerConfig
/** 
 * An object that specifies the authorization service for a domain.
**/
export class CreateDomainConfigurationRequestBodyAuthorizerConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowAuthorizerOverride" })
  allowAuthorizerOverride?: boolean;

  @SpeakeasyMetadata({ data: "json, name=defaultAuthorizerName" })
  defaultAuthorizerName?: string;
}

export enum CreateDomainConfigurationRequestBodyServiceTypeEnum {
    Data = "DATA",
    CredentialProvider = "CREDENTIAL_PROVIDER",
    Jobs = "JOBS"
}


export class CreateDomainConfigurationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizerConfig" })
  authorizerConfig?: CreateDomainConfigurationRequestBodyAuthorizerConfig;

  @SpeakeasyMetadata({ data: "json, name=domainName" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=serverCertificateArns" })
  serverCertificateArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=serviceType" })
  serviceType?: CreateDomainConfigurationRequestBodyServiceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];

  @SpeakeasyMetadata({ data: "json, name=validationCertificateArn" })
  validationCertificateArn?: string;
}


export class CreateDomainConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateDomainConfigurationPathParams;

  @SpeakeasyMetadata()
  headers: CreateDomainConfigurationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateDomainConfigurationRequestBody;
}


export class CreateDomainConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificateValidationException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createDomainConfigurationResponse?: shared.CreateDomainConfigurationResponse;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  unauthorizedException?: any;
}
