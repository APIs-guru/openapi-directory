import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateIntegrationResponsePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=http_method" })
  httpMethod: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource_id" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" })
  restapiId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=status_code" })
  statusCode: string;
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


export class UpdateIntegrationResponseRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=patchOperations", elemType: shared.PatchOperation })
  patchOperations?: shared.PatchOperation[];
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
  integrationResponse?: shared.IntegrationResponse;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  unauthorizedException?: any;
}
