import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TranslationSetsUpdateTranslationSetAttributePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: number;
}


export class TranslationSetsUpdateTranslationSetAttributeRequests extends SpeakeasyBase {
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


export class TranslationSetsUpdateTranslationSetAttributeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TranslationSetsUpdateTranslationSetAttributePathParams;

  @SpeakeasyMetadata()
  request: TranslationSetsUpdateTranslationSetAttributeRequests;
}


export class TranslationSetsUpdateTranslationSetAttributeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
