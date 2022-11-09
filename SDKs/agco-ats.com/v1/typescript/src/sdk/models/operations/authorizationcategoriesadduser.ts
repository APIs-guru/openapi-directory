import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AuthorizationCategoriesAddUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userID" })
  userId: number;
}


export class AuthorizationCategoriesAddUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AuthorizationCategoriesAddUserPathParams;
}


export class AuthorizationCategoriesAddUserResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
