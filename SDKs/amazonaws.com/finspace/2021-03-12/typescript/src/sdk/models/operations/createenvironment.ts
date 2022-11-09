import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateEnvironmentHeaders extends SpeakeasyBase {
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

export enum CreateEnvironmentRequestBodyFederationModeEnum {
    Federated = "FEDERATED"
,    Local = "LOCAL"
}


// CreateEnvironmentRequestBodyFederationParameters
/** 
 * Configuration information when authentication mode is FEDERATED.
**/
export class CreateEnvironmentRequestBodyFederationParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationCallBackURL" })
  applicationCallBackUrl?: string;

  @Metadata({ data: "json, name=attributeMap" })
  attributeMap?: Map<string, string>;

  @Metadata({ data: "json, name=federationProviderName" })
  federationProviderName?: string;

  @Metadata({ data: "json, name=federationURN" })
  federationUrn?: string;

  @Metadata({ data: "json, name=samlMetadataDocument" })
  samlMetadataDocument?: string;

  @Metadata({ data: "json, name=samlMetadataURL" })
  samlMetadataUrl?: string;
}


export class CreateEnvironmentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=federationMode" })
  federationMode?: CreateEnvironmentRequestBodyFederationModeEnum;

  @Metadata({ data: "json, name=federationParameters" })
  federationParameters?: CreateEnvironmentRequestBodyFederationParameters;

  @Metadata({ data: "json, name=kmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateEnvironmentRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateEnvironmentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateEnvironmentRequestBody;
}


export class CreateEnvironmentResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createEnvironmentResponse?: shared.CreateEnvironmentResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
