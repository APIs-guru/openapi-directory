import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateBasePathMappingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domain_name" })
  domainName: string;
}


export class CreateBasePathMappingHeaders extends SpeakeasyBase {
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


export class CreateBasePathMappingRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basePath" })
  basePath?: string;

  @SpeakeasyMetadata({ data: "json, name=restApiId" })
  restApiId: string;

  @SpeakeasyMetadata({ data: "json, name=stage" })
  stage?: string;
}


export class CreateBasePathMappingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateBasePathMappingPathParams;

  @SpeakeasyMetadata()
  headers: CreateBasePathMappingHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateBasePathMappingRequestBody;
}


export class CreateBasePathMappingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  basePathMapping?: shared.BasePathMapping;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

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
