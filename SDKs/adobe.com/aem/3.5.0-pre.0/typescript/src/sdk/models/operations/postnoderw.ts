import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostNodeRwPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class PostNodeRwQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=addMembers" })
  addMembers?: string;
}


export class PostNodeRwRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostNodeRwPathParams;

  @SpeakeasyMetadata()
  queryParams: PostNodeRwQueryParams;
}


export class PostNodeRwResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
