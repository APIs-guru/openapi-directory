import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CertificateInfo } from "./certificateinfo";


export class ListCertificatesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificatesInfo", elemType: shared.CertificateInfo })
  certificatesInfo?: CertificateInfo[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
