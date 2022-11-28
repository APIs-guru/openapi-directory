import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostQueryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=1_property" })
  oneProperty: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=1_property.value" })
  onePropertyValue: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=p.limit" })
  pLimit: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=path" })
  path: string;
}


export class PostQueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostQueryQueryParams;
}


export class PostQueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postQueryDefaultApplicationJsonString?: string;
}
