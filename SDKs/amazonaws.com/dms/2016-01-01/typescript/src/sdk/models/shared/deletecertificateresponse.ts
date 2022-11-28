import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Certificate } from "./certificate";



export class DeleteCertificateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Certificate" })
  certificate?: Certificate;
}
