import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAuthorizablesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authorizableId" })
  authorizableId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createGroup" })
  createGroup?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createUser" })
  createUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=intermediatePath" })
  intermediatePath: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=profile/givenName" })
  profileGivenName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rep:password" })
  repPassword?: string;
}


export class PostAuthorizablesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostAuthorizablesQueryParams;
}


export class PostAuthorizablesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  postAuthorizablesDefaultTextHtmlString?: string;
}
