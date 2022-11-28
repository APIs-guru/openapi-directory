import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertificateDetail } from "./certificatedetail";



export class DescribeCertificateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Certificate" })
  certificate?: CertificateDetail;
}
