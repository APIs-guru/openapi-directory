import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AuthorizationCategoriesDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class AuthorizationCategoriesDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AuthorizationCategoriesDeletePathParams;
}


export class AuthorizationCategoriesDeleteResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
