import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostQueryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=1_property" })
  oneProperty: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=1_property.value" })
  onePropertyValue: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=p.limit" })
  pLimit: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=path" })
  path: string;
}


export class PostQueryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostQueryQueryParams;
}


export class PostQueryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  postQueryDefaultApplicationJsonString?: string;
}
