import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostNodeRwPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class PostNodeRwQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=addMembers" })
  addMembers?: string;
}


export class PostNodeRwRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostNodeRwPathParams;

  @Metadata()
  queryParams: PostNodeRwQueryParams;
}


export class PostNodeRwResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
