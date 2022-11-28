import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateApiMappingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiMappingId" })
  apiMappingId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class UpdateApiMappingHeaders extends SpeakeasyBase {
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


export class UpdateApiMappingRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiId" })
  apiId: string;

  @SpeakeasyMetadata({ data: "json, name=apiMappingKey" })
  apiMappingKey?: string;

  @SpeakeasyMetadata({ data: "json, name=stage" })
  stage?: string;
}


export class UpdateApiMappingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateApiMappingPathParams;

  @SpeakeasyMetadata()
  headers: UpdateApiMappingHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateApiMappingRequestBody;
}


export class UpdateApiMappingResponse extends SpeakeasyBase {
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
  updateApiMappingResponse?: shared.UpdateApiMappingResponse;
}
