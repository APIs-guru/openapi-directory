import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateEnvironmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class UpdateEnvironmentHeaders extends SpeakeasyBase {
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

export enum UpdateEnvironmentRequestBodyFederationModeEnum {
    Federated = "FEDERATED"
,    Local = "LOCAL"
}


// UpdateEnvironmentRequestBodyFederationParameters
/** 
 * Configuration information when authentication mode is FEDERATED.
**/
export class UpdateEnvironmentRequestBodyFederationParameters extends SpeakeasyBase {
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


export class UpdateEnvironmentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=federationMode" })
  federationMode?: UpdateEnvironmentRequestBodyFederationModeEnum;

  @Metadata({ data: "json, name=federationParameters" })
  federationParameters?: UpdateEnvironmentRequestBodyFederationParameters;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateEnvironmentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateEnvironmentPathParams;

  @Metadata()
  headers: UpdateEnvironmentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateEnvironmentRequestBody;
}


export class UpdateEnvironmentResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateEnvironmentResponse?: shared.UpdateEnvironmentResponse;

  @Metadata()
  validationException?: any;
}
