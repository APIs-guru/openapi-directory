import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAuthorizablesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authorizableId" })
  authorizableId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createGroup" })
  createGroup?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createUser" })
  createUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=intermediatePath" })
  intermediatePath: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=profile/givenName" })
  profileGivenName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rep:password" })
  repPassword?: string;
}


export class PostAuthorizablesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostAuthorizablesQueryParams;
}


export class PostAuthorizablesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postAuthorizablesDefaultTextHtmlString?: string;
}
