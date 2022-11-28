import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPathPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class PostPathQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=:name" })
  name: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:primaryType" })
  jcrPrimaryType: string;
}


export class PostPathRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostPathPathParams;

  @SpeakeasyMetadata()
  queryParams: PostPathQueryParams;
}


export class PostPathResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
