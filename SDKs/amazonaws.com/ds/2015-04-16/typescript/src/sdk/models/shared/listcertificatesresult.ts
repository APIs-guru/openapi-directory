import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertificateInfo } from "./certificateinfo";



export class ListCertificatesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificatesInfo", elemType: CertificateInfo })
  certificatesInfo?: CertificateInfo[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
