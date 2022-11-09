import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TranslationSetsDeleteTranslationSetAttributePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: number;
}


export class TranslationSetsDeleteTranslationSetAttributeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TranslationSetsDeleteTranslationSetAttributePathParams;
}


export class TranslationSetsDeleteTranslationSetAttributeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
