import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateIntegrationResponsePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=integrationId" })
  integrationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=integrationResponseId" })
  integrationResponseId: string;
}


export class UpdateIntegrationResponseHeaders extends SpeakeasyBase {
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

export enum UpdateIntegrationResponseRequestBodyContentHandlingStrategyEnum {
    ConvertToBinary = "CONVERT_TO_BINARY",
    ConvertToText = "CONVERT_TO_TEXT"
}


export class UpdateIntegrationResponseRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentHandlingStrategy" })
  contentHandlingStrategy?: UpdateIntegrationResponseRequestBodyContentHandlingStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=integrationResponseKey" })
  integrationResponseKey?: string;

  @SpeakeasyMetadata({ data: "json, name=responseParameters" })
  responseParameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=responseTemplates" })
  responseTemplates?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=templateSelectionExpression" })
  templateSelectionExpression?: string;
}


export class UpdateIntegrationResponseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateIntegrationResponsePathParams;

  @SpeakeasyMetadata()
  headers: UpdateIntegrationResponseHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateIntegrationResponseRequestBody;
}


export class UpdateIntegrationResponseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  updateIntegrationResponseResponse?: shared.UpdateIntegrationResponseResponse;
}
