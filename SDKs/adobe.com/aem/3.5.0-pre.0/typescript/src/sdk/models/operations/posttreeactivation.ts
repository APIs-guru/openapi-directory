import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostTreeActivationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ignoredeactivated" })
  ignoredeactivated: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=onlymodified" })
  onlymodified: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=path" })
  path: string;
}


export class PostTreeActivationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostTreeActivationQueryParams;
}


export class PostTreeActivationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
