import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostBundlePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PostBundleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=action" })
  action: string;
}


export class PostBundleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostBundlePathParams;

  @SpeakeasyMetadata()
  queryParams: PostBundleQueryParams;
}


export class PostBundleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
