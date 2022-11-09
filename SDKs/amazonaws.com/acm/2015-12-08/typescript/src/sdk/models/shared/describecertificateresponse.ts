import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CertificateDetail } from "./certificatedetail";


export class DescribeCertificateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Certificate" })
  certificate?: CertificateDetail;
}
