import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GlobalImageCategoriesPostFileRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  globalResourcesSharedModelsGlobalImageCategory?: shared.GlobalResourcesSharedModelsGlobalImageCategory;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  globalResourcesSharedModelsGlobalImageCategory1?: shared.GlobalResourcesSharedModelsGlobalImageCategory;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  globalResourcesSharedModelsGlobalImageCategory2?: shared.GlobalResourcesSharedModelsGlobalImageCategory;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class GlobalImageCategoriesPostFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: GlobalImageCategoriesPostFileRequests;
}


export class GlobalImageCategoriesPostFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  globalImageCategoriesPostFile200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  globalImageCategoriesPostFile200ApplicationXmlString?: string;

  @SpeakeasyMetadata()
  globalImageCategoriesPostFile200TextJsonString?: string;

  @SpeakeasyMetadata()
  globalImageCategoriesPostFile200TextXmlString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
