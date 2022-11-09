import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AuthorizationCategoriesRemoveUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userID" })
  userId: number;
}


export class AuthorizationCategoriesRemoveUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AuthorizationCategoriesRemoveUserPathParams;
}


export class AuthorizationCategoriesRemoveUserResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
