import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LanguagesDeleteLanguagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=LocaleID" })
  localeId: number;
}


export class LanguagesDeleteLanguageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LanguagesDeleteLanguagePathParams;
}


export class LanguagesDeleteLanguageResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
