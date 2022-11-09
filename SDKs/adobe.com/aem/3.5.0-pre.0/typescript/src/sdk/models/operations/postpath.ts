import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPathPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class PostPathQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=:name" })
  name: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:primaryType" })
  jcrPrimaryType: string;
}


export class PostPathRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostPathPathParams;

  @Metadata()
  queryParams: PostPathQueryParams;
}


export class PostPathResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
