import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateDomainConfigurationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainConfigurationName" })
  domainConfigurationName: string;
}


export class CreateDomainConfigurationHeaders extends SpeakeasyBase {
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


// CreateDomainConfigurationRequestBodyAuthorizerConfig
/** 
 * An object that specifies the authorization service for a domain.
**/
export class CreateDomainConfigurationRequestBodyAuthorizerConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowAuthorizerOverride" })
  allowAuthorizerOverride?: boolean;

  @Metadata({ data: "json, name=defaultAuthorizerName" })
  defaultAuthorizerName?: string;
}

export enum CreateDomainConfigurationRequestBodyServiceTypeEnum {
    Data = "DATA"
,    CredentialProvider = "CREDENTIAL_PROVIDER"
,    Jobs = "JOBS"
}


export class CreateDomainConfigurationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizerConfig" })
  authorizerConfig?: CreateDomainConfigurationRequestBodyAuthorizerConfig;

  @Metadata({ data: "json, name=domainName" })
  domainName?: string;

  @Metadata({ data: "json, name=serverCertificateArns" })
  serverCertificateArns?: string[];

  @Metadata({ data: "json, name=serviceType" })
  serviceType?: CreateDomainConfigurationRequestBodyServiceTypeEnum;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];

  @Metadata({ data: "json, name=validationCertificateArn" })
  validationCertificateArn?: string;
}


export class CreateDomainConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateDomainConfigurationPathParams;

  @Metadata()
  headers: CreateDomainConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateDomainConfigurationRequestBody;
}


export class CreateDomainConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  certificateValidationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createDomainConfigurationResponse?: shared.CreateDomainConfigurationResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  unauthorizedException?: any;
}
