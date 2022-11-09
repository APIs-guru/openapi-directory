import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TranslationSetsPostTranslationSetAttributePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: number;
}


export class TranslationSetsPostTranslationSetAttributeRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  globalResourcesSharedModelsTranslationSetAttribute?: shared.GlobalResourcesSharedModelsTranslationSetAttribute;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  globalResourcesSharedModelsTranslationSetAttribute1?: shared.GlobalResourcesSharedModelsTranslationSetAttribute;

  @Metadata({ data: "request, media_type=text/json" })
  globalResourcesSharedModelsTranslationSetAttribute2?: shared.GlobalResourcesSharedModelsTranslationSetAttribute;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class TranslationSetsPostTranslationSetAttributeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TranslationSetsPostTranslationSetAttributePathParams;

  @Metadata()
  request: TranslationSetsPostTranslationSetAttributeRequests;
}


export class TranslationSetsPostTranslationSetAttributeResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  translationSetsPostTranslationSetAttribute200ApplicationJsonInt32Integer?: number;

  @Metadata()
  translationSetsPostTranslationSetAttribute200TextJsonInt32Integer?: number;
}
