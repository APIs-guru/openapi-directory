import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LanguagesDeleteLanguagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=LocaleID" })
  localeId: number;
}


export class LanguagesDeleteLanguageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LanguagesDeleteLanguagePathParams;
}


export class LanguagesDeleteLanguageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
