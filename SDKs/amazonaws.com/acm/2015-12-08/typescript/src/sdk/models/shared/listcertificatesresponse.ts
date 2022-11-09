import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CertificateSummary } from "./certificatesummary";


export class ListCertificatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateSummaryList", elemType: shared.CertificateSummary })
  certificateSummaryList?: CertificateSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
