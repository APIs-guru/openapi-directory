import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AuthorizationCategoriesPutPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class AuthorizationCategoriesPutRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  authorizationCodesSharedModelsCategory?: shared.AuthorizationCodesSharedModelsCategory;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  authorizationCodesSharedModelsCategory1?: shared.AuthorizationCodesSharedModelsCategory;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  authorizationCodesSharedModelsCategory2?: shared.AuthorizationCodesSharedModelsCategory;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class AuthorizationCategoriesPutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AuthorizationCategoriesPutPathParams;

  @SpeakeasyMetadata()
  request: AuthorizationCategoriesPutRequests;
}


export class AuthorizationCategoriesPutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
