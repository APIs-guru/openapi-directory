import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateIntegrationResponsePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=integrationId" })
  integrationId: string;
}


export class CreateIntegrationResponseHeaders extends SpeakeasyBase {
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

export enum CreateIntegrationResponseRequestBodyContentHandlingStrategyEnum {
    ConvertToBinary = "CONVERT_TO_BINARY"
,    ConvertToText = "CONVERT_TO_TEXT"
}


export class CreateIntegrationResponseRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentHandlingStrategy" })
  contentHandlingStrategy?: CreateIntegrationResponseRequestBodyContentHandlingStrategyEnum;

  @Metadata({ data: "json, name=integrationResponseKey" })
  integrationResponseKey: string;

  @Metadata({ data: "json, name=responseParameters" })
  responseParameters?: Map<string, string>;

  @Metadata({ data: "json, name=responseTemplates" })
  responseTemplates?: Map<string, string>;

  @Metadata({ data: "json, name=templateSelectionExpression" })
  templateSelectionExpression?: string;
}


export class CreateIntegrationResponseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateIntegrationResponsePathParams;

  @Metadata()
  headers: CreateIntegrationResponseHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateIntegrationResponseRequestBody;
}


export class CreateIntegrationResponseResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createIntegrationResponseResponse?: shared.CreateIntegrationResponseResponse;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
