import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCertificateAuthorityCsrResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Csr" })
  csr?: string;
}
