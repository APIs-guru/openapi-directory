import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertificateSummary } from "./certificatesummary";



export class ListCertificatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateSummaryList", elemType: CertificateSummary })
  certificateSummaryList?: CertificateSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
