import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AuthorizationCodeDefinitionsRemoveCategoryFromDefinitionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=categoryID" })
  categoryId: string;
}


export class AuthorizationCodeDefinitionsRemoveCategoryFromDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AuthorizationCodeDefinitionsRemoveCategoryFromDefinitionPathParams;
}


export class AuthorizationCodeDefinitionsRemoveCategoryFromDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
