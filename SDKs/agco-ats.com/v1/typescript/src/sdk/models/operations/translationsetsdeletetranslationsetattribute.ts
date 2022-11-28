import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TranslationSetsDeleteTranslationSetAttributePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: number;
}


export class TranslationSetsDeleteTranslationSetAttributeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TranslationSetsDeleteTranslationSetAttributePathParams;
}


export class TranslationSetsDeleteTranslationSetAttributeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
