import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Certificate } from "./certificate";


export class DescribeCertificateResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Certificate" })
  certificate?: Certificate;
}
