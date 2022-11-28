import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostCqActionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authorizableId" })
  authorizableId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changelog" })
  changelog: string;
}


export class PostCqActionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostCqActionsQueryParams;
}


export class PostCqActionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
