import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AuthorizationCodeDefinitionsRemoveCategoryFromDefinitionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=categoryID" })
  categoryId: string;
}


export class AuthorizationCodeDefinitionsRemoveCategoryFromDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AuthorizationCodeDefinitionsRemoveCategoryFromDefinitionPathParams;
}


export class AuthorizationCodeDefinitionsRemoveCategoryFromDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
