import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostBundlePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PostBundleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=action" })
  action: string;
}


export class PostBundleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostBundlePathParams;

  @Metadata()
  queryParams: PostBundleQueryParams;
}


export class PostBundleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
