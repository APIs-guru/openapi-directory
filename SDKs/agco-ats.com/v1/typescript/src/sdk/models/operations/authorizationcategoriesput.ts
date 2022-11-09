import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AuthorizationCategoriesPutPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class AuthorizationCategoriesPutRequests extends SpeakeasyBase {
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


export class AuthorizationCategoriesPutRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AuthorizationCategoriesPutPathParams;

  @Metadata()
  request: AuthorizationCategoriesPutRequests;
}


export class AuthorizationCategoriesPutResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
