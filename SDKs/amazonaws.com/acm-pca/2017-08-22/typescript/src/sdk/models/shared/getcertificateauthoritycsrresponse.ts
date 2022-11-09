import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCertificateAuthorityCsrResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Csr" })
  csr?: string;
}
