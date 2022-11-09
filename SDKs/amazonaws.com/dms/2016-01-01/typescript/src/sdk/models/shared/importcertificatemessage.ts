import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


export class ImportCertificateMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateIdentifier" })
  certificateIdentifier: string;

  @Metadata({ data: "json, name=CertificatePem" })
  certificatePem?: string;

  @Metadata({ data: "json, name=CertificateWallet" })
  certificateWallet?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
