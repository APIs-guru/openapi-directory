import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateTypePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=typeName" })
  typeName: string;
}


export class UpdateTypeHeaders extends SpeakeasyBase {
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

export enum UpdateTypeRequestBodyFormatEnum {
    Sdl = "SDL"
,    Json = "JSON"
}


export class UpdateTypeRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=definition" })
  definition?: string;

  @Metadata({ data: "json, name=format" })
  format: UpdateTypeRequestBodyFormatEnum;
}


export class UpdateTypeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateTypePathParams;

  @Metadata()
  headers: UpdateTypeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateTypeRequestBody;
}


export class UpdateTypeResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedException?: any;

  @Metadata()
  updateTypeResponse?: shared.UpdateTypeResponse;
}
