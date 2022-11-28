import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateEnvironmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class UpdateEnvironmentHeaders extends SpeakeasyBase {
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

export enum UpdateEnvironmentRequestBodyFederationModeEnum {
    Federated = "FEDERATED",
    Local = "LOCAL"
}


// UpdateEnvironmentRequestBodyFederationParameters
/** 
 * Configuration information when authentication mode is FEDERATED.
**/
export class UpdateEnvironmentRequestBodyFederationParameters extends SpeakeasyBase {
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


export class UpdateEnvironmentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=federationMode" })
  federationMode?: UpdateEnvironmentRequestBodyFederationModeEnum;

  @SpeakeasyMetadata({ data: "json, name=federationParameters" })
  federationParameters?: UpdateEnvironmentRequestBodyFederationParameters;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateEnvironmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateEnvironmentPathParams;

  @SpeakeasyMetadata()
  headers: UpdateEnvironmentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateEnvironmentRequestBody;
}


export class UpdateEnvironmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  updateEnvironmentResponse?: shared.UpdateEnvironmentResponse;

  @SpeakeasyMetadata()
  validationException?: any;
}
