import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AuthorizationCategoriesPostRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  authorizationCodesSharedModelsCategory?: shared.AuthorizationCodesSharedModelsCategory;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  authorizationCodesSharedModelsCategory1?: shared.AuthorizationCodesSharedModelsCategory;

  @Metadata({ data: "request, media_type=text/json" })
  authorizationCodesSharedModelsCategory2?: shared.AuthorizationCodesSharedModelsCategory;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class AuthorizationCategoriesPostRequest extends SpeakeasyBase {
  @Metadata()
  request: AuthorizationCategoriesPostRequests;
}


export class AuthorizationCategoriesPostResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  authorizationCategoriesPost200ApplicationJsonString?: string;

  @Metadata()
  authorizationCategoriesPost200ApplicationXmlString?: string;

  @Metadata()
  authorizationCategoriesPost200TextJsonString?: string;

  @Metadata()
  authorizationCategoriesPost200TextXmlString?: string;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
