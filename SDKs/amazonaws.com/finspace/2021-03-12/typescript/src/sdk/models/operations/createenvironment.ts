import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateEnvironmentHeaders extends SpeakeasyBase {
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

export enum CreateEnvironmentRequestBodyFederationModeEnum {
    Federated = "FEDERATED",
    Local = "LOCAL"
}


// CreateEnvironmentRequestBodyFederationParameters
/** 
 * Configuration information when authentication mode is FEDERATED.
**/
export class CreateEnvironmentRequestBodyFederationParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationCallBackURL" })
  applicationCallBackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=attributeMap" })
  attributeMap?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=federationProviderName" })
  federationProviderName?: string;

  @SpeakeasyMetadata({ data: "json, name=federationURN" })
  federationUrn?: string;

  @SpeakeasyMetadata({ data: "json, name=samlMetadataDocument" })
  samlMetadataDocument?: string;

  @SpeakeasyMetadata({ data: "json, name=samlMetadataURL" })
  samlMetadataUrl?: string;
}


export class CreateEnvironmentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=federationMode" })
  federationMode?: CreateEnvironmentRequestBodyFederationModeEnum;

  @SpeakeasyMetadata({ data: "json, name=federationParameters" })
  federationParameters?: CreateEnvironmentRequestBodyFederationParameters;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateEnvironmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateEnvironmentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateEnvironmentRequestBody;
}


export class CreateEnvironmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createEnvironmentResponse?: shared.CreateEnvironmentResponse;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
