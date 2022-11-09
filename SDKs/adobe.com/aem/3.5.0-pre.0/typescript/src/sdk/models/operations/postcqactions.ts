import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostCqActionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authorizableId" })
  authorizableId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=changelog" })
  changelog: string;
}


export class PostCqActionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostCqActionsQueryParams;
}


export class PostCqActionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
