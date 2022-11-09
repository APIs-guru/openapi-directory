import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostNodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class PostNodeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=:operation" })
  operation?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=deleteAuthorizable" })
  deleteAuthorizable?: string;
}


export class PostNodeRequestBodyFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=file" })
  file: string;
}


export class PostNodeRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  file?: PostNodeRequestBodyFile;
}


export class PostNodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostNodePathParams;

  @Metadata()
  queryParams: PostNodeQueryParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PostNodeRequestBody;
}


export class PostNodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
