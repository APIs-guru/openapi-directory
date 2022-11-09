import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateTypePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;
}


export class CreateTypeHeaders extends SpeakeasyBase {
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

export enum CreateTypeRequestBodyFormatEnum {
    Sdl = "SDL"
,    Json = "JSON"
}


export class CreateTypeRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=definition" })
  definition: string;

  @Metadata({ data: "json, name=format" })
  format: CreateTypeRequestBodyFormatEnum;
}


export class CreateTypeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateTypePathParams;

  @Metadata()
  headers: CreateTypeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateTypeRequestBody;
}


export class CreateTypeResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createTypeResponse?: shared.CreateTypeResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedException?: any;
}
