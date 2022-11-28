import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AuthorizationCodeDefinitionsAddCategoryToDefinitionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=categoryID" })
  categoryId: string;
}


export class AuthorizationCodeDefinitionsAddCategoryToDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AuthorizationCodeDefinitionsAddCategoryToDefinitionPathParams;
}


export class AuthorizationCodeDefinitionsAddCategoryToDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
