import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Certificate } from "./certificate";



export class ImportCertificateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Certificate" })
  certificate?: Certificate;
}
