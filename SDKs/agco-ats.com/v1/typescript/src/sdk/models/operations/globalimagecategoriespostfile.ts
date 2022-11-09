import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GlobalImageCategoriesPostFileRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  globalResourcesSharedModelsGlobalImageCategory?: shared.GlobalResourcesSharedModelsGlobalImageCategory;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  globalResourcesSharedModelsGlobalImageCategory1?: shared.GlobalResourcesSharedModelsGlobalImageCategory;

  @Metadata({ data: "request, media_type=text/json" })
  globalResourcesSharedModelsGlobalImageCategory2?: shared.GlobalResourcesSharedModelsGlobalImageCategory;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class GlobalImageCategoriesPostFileRequest extends SpeakeasyBase {
  @Metadata()
  request: GlobalImageCategoriesPostFileRequests;
}


export class GlobalImageCategoriesPostFileResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  globalImageCategoriesPostFile200ApplicationJsonString?: string;

  @Metadata()
  globalImageCategoriesPostFile200ApplicationXmlString?: string;

  @Metadata()
  globalImageCategoriesPostFile200TextJsonString?: string;

  @Metadata()
  globalImageCategoriesPostFile200TextXmlString?: string;

  @Metadata()
  statusCode: number;
}
