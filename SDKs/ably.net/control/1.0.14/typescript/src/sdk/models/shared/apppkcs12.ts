import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AppPkcs12P12File extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=p12File" })
  p12File: string;
}


export class AppPkcs12 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  p12File: AppPkcs12P12File;

  @SpeakeasyMetadata({ data: "multipart_form, name=p12Pass" })
  p12Pass: string;
}
