import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TranslationSetsPostTranslationSetAttributePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: number;
}


export class TranslationSetsPostTranslationSetAttributeRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  globalResourcesSharedModelsTranslationSetAttribute?: shared.GlobalResourcesSharedModelsTranslationSetAttribute;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  globalResourcesSharedModelsTranslationSetAttribute1?: shared.GlobalResourcesSharedModelsTranslationSetAttribute;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  globalResourcesSharedModelsTranslationSetAttribute2?: shared.GlobalResourcesSharedModelsTranslationSetAttribute;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class TranslationSetsPostTranslationSetAttributeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TranslationSetsPostTranslationSetAttributePathParams;

  @SpeakeasyMetadata()
  request: TranslationSetsPostTranslationSetAttributeRequests;
}


export class TranslationSetsPostTranslationSetAttributeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  translationSetsPostTranslationSetAttribute200ApplicationJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  translationSetsPostTranslationSetAttribute200TextJsonInt32Integer?: number;
}
