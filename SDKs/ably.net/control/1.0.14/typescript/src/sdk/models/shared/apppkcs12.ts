import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AppPkcs12P12File extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=p12File" })
  p12File: string;
}


export class AppPkcs12 extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  p12File: AppPkcs12P12File;

  @Metadata({ data: "multipart_form, name=p12Pass" })
  p12Pass: string;
}
