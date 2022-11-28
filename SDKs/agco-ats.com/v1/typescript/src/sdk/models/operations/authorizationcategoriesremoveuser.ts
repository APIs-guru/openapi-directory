import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AuthorizationCategoriesRemoveUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userID" })
  userId: number;
}


export class AuthorizationCategoriesRemoveUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AuthorizationCategoriesRemoveUserPathParams;
}


export class AuthorizationCategoriesRemoveUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
