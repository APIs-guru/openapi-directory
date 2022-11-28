import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AuthorizationCategoriesPostRequests extends SpeakeasyBase {
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


export class AuthorizationCategoriesPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: AuthorizationCategoriesPostRequests;
}


export class AuthorizationCategoriesPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  authorizationCategoriesPost200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  authorizationCategoriesPost200ApplicationXmlString?: string;

  @SpeakeasyMetadata()
  authorizationCategoriesPost200TextJsonString?: string;

  @SpeakeasyMetadata()
  authorizationCategoriesPost200TextXmlString?: string;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
