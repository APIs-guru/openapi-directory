import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostNodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class PostNodeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=:operation" })
  operation?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deleteAuthorizable" })
  deleteAuthorizable?: string;
}


export class PostNodeRequestBodyFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}


export class PostNodeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  file?: PostNodeRequestBodyFile;
}


export class PostNodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostNodePathParams;

  @SpeakeasyMetadata()
  queryParams: PostNodeQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PostNodeRequestBody;
}


export class PostNodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
