import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetIntegrationResponsePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=integrationId" })
  integrationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=integrationResponseId" })
  integrationResponseId: string;
}


export class GetIntegrationResponseHeaders extends SpeakeasyBase {
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


export class GetIntegrationResponseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetIntegrationResponsePathParams;

  @Metadata()
  headers: GetIntegrationResponseHeaders;
}


export class GetIntegrationResponseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getIntegrationResponseResponse?: shared.GetIntegrationResponseResponse;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
