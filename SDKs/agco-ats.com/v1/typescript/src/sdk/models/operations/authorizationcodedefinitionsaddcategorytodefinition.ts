import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AuthorizationCodeDefinitionsAddCategoryToDefinitionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=categoryID" })
  categoryId: string;
}


export class AuthorizationCodeDefinitionsAddCategoryToDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AuthorizationCodeDefinitionsAddCategoryToDefinitionPathParams;
}


export class AuthorizationCodeDefinitionsAddCategoryToDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
