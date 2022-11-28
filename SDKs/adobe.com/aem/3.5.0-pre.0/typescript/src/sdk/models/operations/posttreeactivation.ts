import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostTreeActivationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ignoredeactivated" })
  ignoredeactivated: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onlymodified" })
  onlymodified: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=path" })
  path: string;
}


export class PostTreeActivationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostTreeActivationQueryParams;
}


export class PostTreeActivationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
