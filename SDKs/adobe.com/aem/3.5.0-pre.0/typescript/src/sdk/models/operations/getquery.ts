import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetQueryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=1_property" })
  oneProperty: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=1_property.value" })
  onePropertyValue: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=p.limit" })
  pLimit: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=path" })
  path: string;
}


export class GetQueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetQueryQueryParams;
}


export class GetQueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getQueryDefaultApplicationJsonString?: string;
}
